import styles from "./../styles/Hubs.module.css";
export default function CardLayout({ children }) {
  return (
    <div
      style={{
        width: "80%",
        borderRadius: "10px",
        padding: "10px",
        display: "flex",
        height: "280pt",
        border: "1px solid rgb(224, 221, 221)",
        marginBottom: "14pt",
      }}
    >
      {children}
    </div>
  );
}
