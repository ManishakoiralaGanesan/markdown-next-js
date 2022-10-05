import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getAllPosts } from "../lib/files";
import md from "markdown-it";
import Layout from "../Layout/Layout";
export default function Home({ posts2 }) {
  console.log(posts2);
  return <Layout posts2={posts2}></Layout>;
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
