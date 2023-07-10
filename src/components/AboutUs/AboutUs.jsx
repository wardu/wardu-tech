import styles from "./AboutUs.module.css";
import Image from "next/image";

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
        <p className={styles.description}>
          We are Wardu Technologies and performance is our passion. We make
          high-speed, high-impact websites for industry leaders that want 99th
          percentile results. Through our mastery of the latest technologies and
          devotion to optimised code, our websites are lightning-fast,
          seamlessly functional, and scalable. Partner with us for web solutions
          that perform at the peak, guaranteeing enhanced user satisfaction,
          improved search rankings, and boosted business outcomes. Wardu
          Technologies is the web development powerhouse that can help guide
          your business to dominate your niche in the digital space.
        </p>
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
