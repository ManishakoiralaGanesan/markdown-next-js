import styles from "./../styles/Layout.module.css";
export default function MainContentLayout({ children }) {
  return (
    <main
      style={{
        flex: "1",
        position: "relative",
        left: "10%",
        overflow: "scroll",
      }}
    >
      {children}
    </main>
  );
}
