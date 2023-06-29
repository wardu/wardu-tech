import React from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";

const Carousel = () => {
  return (
    <div>
      <div className={styles.clientCarousel}>
        <p className={styles.text}> Our Clients Are Backed By:</p>
        <div className={styles.slider}>
          <div className={styles.slideTrack}>
            <div className={styles.slide}>
              <Image src='/vercel.svg' height='100' width='250' alt='' />
            </div>
            <div className={styles.slide}>
              <Image src='/google.svg' height='100' width='250' alt='' />
            </div>
            <div className={styles.slide}>
              <Image src='/mongo.svg' height='100' width='250' alt='' />
            </div>
            <div className={styles.slide}>
              <Image src='/node.svg' height='100' width='250' alt='' />
            </div>
            <div className={styles.slide}>
              <Image src='/figma.svg' height='100' width='250' alt='' />
            </div>
            <div className={styles.slide}>
              <Image src='/github.svg' height='100' width='250' alt='' />
            </div>
            <div className={styles.slide}>
              <Image src='/react.svg' height='100' width='250' alt='' />
            </div>
            <div className={styles.slide}>
              <Image src='/amazon.svg' height='100' width='250' alt='' />
            </div>
            <div className={styles.slide}>
              <Image src='/vercel.svg' height='100' width='250' alt='' />
            </div>
            <div className={styles.slide}>
              <Image src='/facebook.svg' height='100' width='250' alt='' />
            </div>
            <div className={styles.slide}>
              <Image src='/react.svg' height='100' width='250' alt='' />
            </div>
            <div className={styles.slide}>
              <Image src='/node.svg' height='100' width='250' alt='' />
            </div>
            <div className={styles.slide}>
              <Image src='vercel.svg' height='100' width='250' alt='' />
            </div>
            <div className={styles.slide}>
              <Image src='/amazon.svg' height='100' width='250' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
