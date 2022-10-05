import { useRouter } from "next/router";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Layout from "../../Layout/Layout";
import { getAllPosts } from "../../lib/files";
export default function PostTemp({ slug, frontmatter, content, posts2 }) {
  console.log(slug);
  return (
    <Layout posts2={posts2}>
      <div>
        <div className="prose mx-auto">
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("mdFiles");
  const paths = files.map((file) => ({
    params: {
      slug: file.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(paths) {
  const {
    params: { slug },
  } = paths;
  const dirName = "mdFiles";
  const fileName = fs.readFileSync(`${dirName}/${slug}.md`, `utf-8`);
  const { data: frontmatter, content } = matter(fileName);
  const posts = getAllPosts();
  const posts2 = posts.map((item) => {
    return item;
  });
  return {
    props: {
      slug,
      posts2,
      frontmatter,
      content,
    },
  };
}
