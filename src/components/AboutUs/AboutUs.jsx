import styles from "./AboutUs.module.css";
import Image from "next/image";
import Button from "../Button/Button";

import { Bodoni_Moda } from "next/font/google";
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const AboutUs = () => {
  return (
    <div className={styles.outter}>
      <div className={bodoni.className}>
        <h2 className={styles.title}>About Us</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.description}>
            My name is Warren Dubery and I am the founder of Wardu Technologies.
          </p>
          <p className={styles.description}>
            I have a passion for creating high-performance websites for small
            businesses with the same technologies that the tech giants use.
          </p>
          <p className={styles.description}>
            I have a background in Physics and Mathematics and look at
            technology as a tool to leverage to help solve real-world problems.
          </p>
          <p className={styles.description}>
            I have worked with clients from a wide range of industries,
            including the financial, travel, and construction sectors. I have
            also worked with clients from around the world, including Australia,
            the United Kingdom, and Colombia.
          </p>
          <p className={styles.description}>
            Wardu Technologies is the web development powerhouse that can help
            guide your business to dominate your niche in the digital space.
          </p>
          <p className={styles.description}>
            Partner with us today for improved search rankings and boosted
            business outcomes.
          </p>
          <div className={styles.button}>
            <Button
              url='/contact'
              text='Work With Me &nbsp;&nbsp;&nbsp;&nbsp;  →'
            />
          </div>
        </div>
        <div className={styles.profileContainer}>
          <Image
            src='/images/wardu-profile.svg'
            width={160}
            height={320}
            alt='Warren'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
