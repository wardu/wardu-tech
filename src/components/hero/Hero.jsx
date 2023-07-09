import styles from "./Hero.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroImage}>
        <Image
          priority={true}
          src={"/images/blurBall.png"}
          fill={true}
          alt='blur ball'
          quality={100}
          sizes='100vw'
        />
      </div>
      <div classname={styles.outter}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.topTitle}>High performance</h1>
              <h1 className={styles.lowerTitle}>websites and designs</h1>
            </div>
            <div className={styles.scrollContainer}>
              <Image
                src={"/arrow.png"}
                width={10}
                height={70}
                alt='scroll arrow'
              />
              <h3 className={styles.scrollText}>
                SCROLL DOWN TO FIND OUT MORE
              </h3>
            </div>
            <h3 className={styles.marketLeaders}>
              MARKET LEADERS USE WARDU TECHNOLOGIES TO GROW
            </h3>
          </div>

          <div className={styles.right}>
            <div className={styles.rightContainer}>
              <div className={styles.heroTextWrapper}>
                <p className={styles.heroText}>
                  Wardu Technologies is a web development powerhouse based in
                  London, UK.
                </p>
                <p className={styles.heroText}>
                  We craft high-performance, bespoke websites and web
                  applications. Our websites ensure blazing speed, captivating
                  designs, and enhanced search rankings.
                </p>
              </div>
              <div className={styles.button}>
                <Button
                  url='/contact'
                  text='Work With Us &nbsp;&nbsp;&nbsp;&nbsp;  →'
                />
              </div>
              <div className={styles.brandsContainer}>
                <p className={styles.brandsTitle}>Brands we work with:</p>
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
