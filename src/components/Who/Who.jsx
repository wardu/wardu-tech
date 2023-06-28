import React from "react";
import styles from "./Who.module.css";
import Image from "next/image";

const Who = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.serveText}>Who we Serve:</h2>
      <div className={styles.imageTiles}>
        <div className={styles.imageContainer}>
          <h3 className={styles.imageText}>MOTORCYCLE TUNERS</h3>

          <Image src='/tuners.png' alt='tuners' fill={true} />
        </div>
        <div className={styles.imageContainer}>
          <h3 className={styles.imageText}>MECHANICS</h3>
          <Image src='/mechanics.png' alt='mechanics' fill={true} />
        </div>

        <div className={styles.imageContainer}>
          <h3 className={styles.imageText}>RACING TEAMS</h3>

          <Image src='/racing.png' alt='racing teams' fill={true} />
        </div>
        <div className={styles.imageContainer}>
          <h3 className={styles.imageText}>ENTHUSIASTS</h3>

          <Image
            src='/enthusiasts.png'
            alt='motorcycle enthusiast'
            fill={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Who;
