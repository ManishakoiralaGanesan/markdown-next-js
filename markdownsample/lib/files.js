import fs from "fs";
import matter from "gray-matter";

export function getAllPosts() {
  const files = fs.readdirSync("mdFiles");
  // console.log(files);
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`mdFiles/${fileName}`, "utf-8");
    // console.log(readFile);
    const { data: frontmatter, content } = matter(readFile);
    // console.log("frontmatter", frontmatter);

    return {
      slug,
      frontmatter,
      content,
    };
  });
  // console.log(posts, "posts");
  return posts;
}
