import { useEffect, useState } from "react";
import styles from "./AsyncComponentContent.module.scss";

export default function AsyncComponentContent() {
  const [text, setText] = useState("Hello from async component!");

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setText("Updated text from async component!");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <p>{text}</p>
    </div>
  );
}
