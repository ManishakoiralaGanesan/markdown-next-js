import styles from "./../styles/Layout.module.css";
export default function SideNavLayout({ children }) {
  return <aside className={styles.sideNav}>{children}</aside>;
}
