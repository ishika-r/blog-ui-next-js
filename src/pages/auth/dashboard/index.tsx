import React from "react";
import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Component</h1>
      <p>This is the content of my component.</p>
    </div>
  );
};

export default index;
