import fs from "fs";
import path from "path";
import Link from "next/link";

interface BlogPost {
  date: string;
  slug: string;
  title: string;
}

export const metadata = {
  title: "Cricket News Hub",
  description: "Get the latest cricket news and updates from around the world",
};

const getBlogPosts = (): BlogPost[] => {
  const baseDir = path.join(process.cwd(), "database/sports/cricket");
  const dates = fs.readdirSync(baseDir);
  const blogPosts: BlogPost[] = [];

  for (const folderDate of dates) {
    const slugs = fs.readdirSync(path.join(baseDir, folderDate));
    for (const fileSlug of slugs) {
      if (fileSlug.endsWith(".mdx")) {
        const slug = fileSlug.replace(".mdx", "");
        const filePath = path.join(baseDir, folderDate, fileSlug);
        const fileContent = fs.readFileSync(filePath, "utf8");

        // Extract the front matter to get the title (you might need to adjust this part)
        const titleMatch = fileContent.match(/title:\s*(.*)/);
        const title = titleMatch ? titleMatch[1] : slug;

        blogPosts.push({
          date: folderDate,
          slug,
          title,
        });
      }
    }
  }

  return blogPosts.reverse();
};

export default function BlogList() {
  const blogPosts = getBlogPosts();

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow text-black">
        <h1 className="text-3xl font-bold mb-6">Cricket News Hub</h1>
        <ul className="space-y-4">
          {blogPosts.map((post) => (
            <li
              key={post.slug}
              className="flex items-center justify-between p-4 border-[1px] border-gray-200"
            >
              <Link
                href={`/sports/cricket/${post.date}/${post.slug}`}
                className="text-xl font-semibold text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
              <span className="text-gray-500">→</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
