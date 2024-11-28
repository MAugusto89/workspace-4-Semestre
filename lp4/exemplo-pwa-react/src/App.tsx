import React from "react";
import styles from "./App.module.css";
import photo1 from "./assets/img/img01.jpg";
import photo2 from "./assets/img/img02.jpg";
import video1 from "./assets/video/video1.mp4";

const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Carros</h1>

      <img src={photo1} alt="Image 1" />
      <p className={styles.label}>Um belo carro!</p>

      <img src={photo2} alt="Image 2" />
      <p className={styles.label}>Carro top hein</p>

      <video src={video1} autoPlay loop muted controls={true} />
      <p className={styles.label}>Veja esse video!</p>
    </div>
  );
};

export default App;
