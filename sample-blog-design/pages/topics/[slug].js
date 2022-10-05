import { useRouter } from "next/router";
import Layout from "./../../Layout/Layout";
import fs from "fs";
import matter from "gray-matter";
import styles from "./../../styles/Hubs.module.css";
import Link from "next/link";
import CardLayout from "../../Layout/CardLayout";
export default function post({ frontmatter, content }) {
  const router = useRouter();
  console.log(frontmatter, content);
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <div className={styles.detailsContainer}>
        <div className={styles.titleDesc}>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.description}</p> <br></br>
          <br></br>
          <Link href="/">
            <a href="#" className={styles.btn}>
              Start Now
            </a>
          </Link>
        </div>
      </div>

      <Layout>
        <h1>Introduction to HTML</h1>
        <iframe
          width="80%"
          height="615"
          src="https://www.youtube.com/embed/eZ9iT0trpR4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>

        {/* <CardLayout>
          <div style={{ width: "40%" }}>image</div>
          <div style={{ flex: "1", padding: "10px" }}>
            <div style={{ display: "block" }}>Module 1</div>
            <div
              style={{ marginTop: "14px", height: "70%", overflow: "scroll" }}
            >
              {" "}
              <h2>Introduction</h2>
            </div>
          </div>
        </CardLayout> */}
      </Layout>
    </div>
  );
}
export async function getStaticPaths() {
  const files = fs.readdirSync("topics");
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
  const dirName = "topics";
  const fileName = fs.readFileSync(`${dirName}/${slug}.md`, `utf-8`);
  const { data: frontmatter, content } = matter(fileName);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}
