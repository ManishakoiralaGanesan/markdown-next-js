import Link from "next/link";
import styles from "./../styles/Layout.module.css";
import ContentLayout from "./ContentLayout";
import MainContentLayout from "./MainContentLayout";
import SideNavLayout from "./SidenavLayout";
export default function Layout({ children }) {
  return (
    <ContentLayout>
      <SideNavLayout>
        <nav className={styles.sideNavTab}>
          <div className={styles.itemContainer}>
            <p>Module 1</p> <a href="">Introduction</a>{" "}
          </div>
          <div className={styles.itemContainer}>
            <p>Module 2</p> <a href="">Get Started</a>{" "}
          </div>
          <div className={styles.itemContainer}>
            <p>Module 3</p> <a href="">Installation Process</a>{" "}
          </div>
        </nav>
      </SideNavLayout>

      <MainContentLayout>{children}</MainContentLayout>
    </ContentLayout>
  );
}
