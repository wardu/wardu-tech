import styles from "./Hero.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div classname={styles.outter}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.topTitle}>Giving Super Powers</h1>
              <h1 className={styles.lowerTitle}>to Small Websites</h1>
            </div>

            <h3 className={styles.marketLeaders}>
              MARKET LEADERS USE WARDU TECHNOLOGIES TO GROW
            </h3>
          </div>

          <div className={styles.right}>
            <div className={styles.rightContainer}>
              <div className={styles.heroTextWrapper}>
                <p className={styles.heroText}>
                  Wardu Technologies is a web development agency based in
                  London, UK.
                </p>
                <p className={styles.heroText}>
                  Our bespoke websites are never from template. We use
                  state-of-the-art technologies to ensure the fastest loading
                  speeds possible.
                </p>
                <p className={styles.heroText}>
                  Our approach is particularly beneficial for the smaller
                  websites competing in a world of giants.
                </p>
              </div>
              <div className={styles.button}>
                <Button
                  url='/contact'
                  text='Work With Us &nbsp;&nbsp;&nbsp;&nbsp;  →'
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.brandsContainer}>
          <p className={styles.brandsTitle}>We work with:</p>
          <div className={styles.brands}>
            <Image
              src={"/images/brands/amazon-logo.svg"}
              width={112}
              height={33}
              alt='amazon logo'
            />
            <Image
              src={"/images/brands/node-logo.svg"}
              width={90}
              height={90}
              alt='node logo'
            />
            <Image
              src={"/images/brands/react-logo.svg"}
              width={55}
              height={55}
              alt='react logo'
            />
            <Image
              src={"/images/brands/google-logo.svg"}
              width={147}
              height={31}
              alt='google analytics logo'
            />
            <Image
              src={"/images/brands/vercel-logo.svg"}
              width={150}
              height={140}
              alt='vercel logo'
            />
            <Image
              src={"/images/brands/github-logo.svg"}
              width={158}
              height={52}
              alt='github logo'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
