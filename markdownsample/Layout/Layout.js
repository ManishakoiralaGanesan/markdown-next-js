import Head from "next/head";
import Link from "next/link";
import styles from "./../styles/Home.module.css";
import ContentLayout from "./ContentLayout";
import MainContentLayout from "./MainContentLayout";
import SideNavLayout from "./SidenavLayout";
export default function Layout({ children, ...pageProps }) {
  const { posts2 } = pageProps;
  return (
    <ContentLayout>
      <SideNavLayout>
        <nav className="side-nav-tab">
          {posts2 &&
            posts2.map((post, index) => {
              return (
                <Link href={`/posts/${post.slug}`} key={index}>
                  {post.slug}
                </Link>
              );
            })}
        </nav>
      </SideNavLayout>

      <MainContentLayout>
        <h1>Welcome to My Blogs</h1>
        {children}
      </MainContentLayout>
    </ContentLayout>
  );
}
