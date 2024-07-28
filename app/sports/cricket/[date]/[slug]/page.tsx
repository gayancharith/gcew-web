import NextImage from "next/image";
import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";

interface BlogPageProps {
  frontMatter: { [key: string]: any };
}

interface IParams {
  date: string;
  slug: string;
}

export async function generateMetadata({ params }: { params: IParams }) {
  return {
    title: params.slug
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" "),
  };
}

export default async function BlogPage({ params }: { params: IParams }) {
  const { date, slug } = params;
  const baseDir = path.join(process.cwd(), "database/sports/cricket");

  let fileContent = "";
  let frontMatter = {} as BlogPageProps["frontMatter"];

  // Traverse the nested folder structure to find the matching file
  const dates = fs.readdirSync(baseDir);

  for (const folderDate of dates) {
    if (folderDate === date) {
      const slugs = fs.readdirSync(path.join(baseDir, folderDate));
      for (const fileSlug of slugs) {
        if (fileSlug.replace(".mdx", "") === slug) {
          const filePath = path.join(baseDir, folderDate, fileSlug);
          fileContent = fs.readFileSync(filePath, "utf8");
          const { content } = matter(fileContent);
          fileContent = content;
          // frontMatter = data;
          break;
        }
      }
    }
  }

  if (!fileContent) {
    return <div>Blog post not found</div>;
  }

  // Return the MDXRemote component with the markdown content
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow text-black">
        <MDXRemote
          source={fileContent}
          components={{
            h1: (props) => (
              <h1 className="text-3xl font-bold mb-6" {...props} />
            ),
            h2: (props) => (
              <h2 className="text-2xl font-semibold mb-4" {...props} />
            ),
            h3: (props) => (
              <h3 className="text-xl font-semibold mb-2" {...props} />
            ),
            p: (props) => <p className="mb-4" {...props} />,
            ul: (props) => (
              <ul className="list-disc list-inside mb-4" {...props} />
            ),
            li: (props) => <li className="mb-2" {...props} />,
            a: (props) => (
              <a className="text-blue-500 hover:underline" {...props} />
            ),
            img: ({ src, alt, width, height, ...props }) => {
              console.log({ width });
              console.log({ height });
              return (
                <NextImage
                  {...props}
                  src={src as string}
                  alt={alt as string}
                  layout="responsive"
                  width={(width as number) || 960}
                  height={(height as number) || 540}
                  priority
                />
              );
            },
            blockquote: (props) => (
              <blockquote
                className="border-l-4 border-gray-300 pl-4 italic mb-4"
                {...props}
              />
            ),
          }}
        />
      </div>
    </div>
  );
}
