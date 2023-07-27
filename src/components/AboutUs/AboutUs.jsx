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
        <h2 className={styles.title}>The Founder</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.description}>
            My name is Warren Dubery and I am the founder of Wardu Technologies.
          </p>
          <p className={styles.description}>
            I have a passion for creating high-performance websites for small
            businesses and individuals. It is the best way that I know how to
            give people a way to have more impact in the world.
          </p>
          <p className={styles.description}>
            I have a background in Physics and Mathematics and look at
            technology as a tool to leverage to help solve real-world problems.
          </p>
          <p className={styles.description}>
            I have worked with clients from around the world, including
            Australia, the United Kingdom, and Colombia.
          </p>
          <p className={styles.description}>
            At Wardu Technologies, everything we do is geared towards guiding
            your business to dominate your niche in the digital space.
          </p>
          <p className={styles.description}>
            Partnering with us is a statement that you are ready to be part of
            the top 1% of performers in your industry.
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
