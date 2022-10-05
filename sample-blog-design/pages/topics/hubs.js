import ContentLayout from "./../../Layout/ContentLayout";
import styles from "./../../styles/Hubs.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { getAllPosts } from "../../lib/getAllFiles";
export default function Topics({ posts2 }) {
  console.log(posts2);
  const router = useRouter();
  function handleClick(slug) {
    console.log(slug);
    const params = slug;
    router.push(`/topics/${params}`);
  }
  return (
    <ContentLayout>
      <div className={styles.hubContainer}>
        {posts2.map((item, index) => (
          <div
            className={styles.topicContainer}
            onClick={() => handleClick(item.slug)}
            key={index}
          >
            <div className={styles.topicImage}>
              <Image
                src={item.frontmatter.socialImage}
                layout="fill"
                style={{
                  paddingTop: "10px",
                }}
              ></Image>
            </div>
            <div className={styles.topicName}>{item.slug}</div>
            <div className={styles.topicDescription}>
              {item.frontmatter.description}
            </div>
            <div className={styles.modules}>
              <p>modules</p>
            </div>
          </div>
        ))}
      </div>
    </ContentLayout>
  );
}
export async function getStaticProps() {
  const posts = getAllPosts();
  const posts2 = posts.map((item) => {
    return item;
  });
  // console.log(posts2, "posts2");
  return {
    props: {
      posts2,
    },
  };
}
