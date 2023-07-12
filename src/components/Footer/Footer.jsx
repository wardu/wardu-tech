import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.leftContents}>
          <div className={styles.titleWrapper}>
            <h3 className={styles.title}>WARD</h3>
            <h3 className={styles.title}>TECHNOLOGIES.</h3>
          </div>
          <div className={styles.links}>
            <Link href='/'>Home</Link>
            <Link href='/pricing'>Pricing</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </div>
          <p className={styles.copy}>
            © 2023 Wardu Technologies. All rights reserved
          </p>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <Image
          className={styles.backgroundXs}
          src='/images/backgroundX.png'
          alt='background Xs'
          width={100}
          height={100}
        />
        <div className={styles.rightContents}>
          <div className={styles.topWrapper}>
            <Image
              src='/images/up-arrow.svg'
              alt='up arrow'
              width={10}
              height={100}
            />
            <p>Top</p>
          </div>
          <div className={styles.socials}>
            <div className={styles.social}>
              <Image
                src='/images/socials/simpleInsta.svg'
                alt='facebook'
                width={30}
                height={30}
              />
              <h3 className={styles.socialText}>@wardutech</h3>
            </div>
            <div className={styles.social}>
              <Image
                src='/images/socials/simpleTwitter.svg'
                alt='facebook'
                width={30}
                height={30}
              />
              <h3 className={styles.socialText}>@wardutech</h3>
            </div>
            <div className={styles.social}>
              <Image
                src='/images/socials/simpleFace.svg'
                alt='facebook'
                width={30}
                height={30}
              />
              <h3 className={styles.socialText}>@wardutech</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
Footer;
