import styles from "./../styles/Layout.module.css";
export default function ContentLayout({ children }) {
  return <div className={styles.contentContainer}>{children}</div>;
}
