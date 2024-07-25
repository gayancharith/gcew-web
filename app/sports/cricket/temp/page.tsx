import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function RemoteMdxPage() {
  const filePath = path.join(process.cwd(), "/database/test/test.mdx");
  const markdown = fs.readFileSync(filePath, "utf8");
  console.log({ markdown });
  return <MDXRemote source={markdown} />;
}
