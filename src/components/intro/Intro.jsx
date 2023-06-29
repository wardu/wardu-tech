import styles from "./Intro.module.css";
import Image from "next/image";

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>WEB DESIGN & MARKETING</h2>
        <h1 className={styles.title}>For Motorcycle Tuners and Mechanics</h1>
        <p className={styles.description}>
          Wardu Technologies is a web development powerhouse for motorcycle
          workshop owners.
        </p>
        <p className={styles.description}>
          We craft high-performance sites with Jamstack technologies, ensuring
          blazing speed, captivating designs, and enhanced search rankings.
          Dominate the digital roads.
        </p>
      </div>
    </div>
  );
};

export default Intro;
