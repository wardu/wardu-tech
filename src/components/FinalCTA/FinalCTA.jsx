import styles from "./FinalCTA.module.css";
import Button from "../Button/Button";
import Image from "next/image";

import { Bodoni_Moda } from "next/font/google";
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const FinalCTA = () => {
  return (
    <div className={styles.outter}>
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>Ready to join the 99th percentile?</h2>
        </div>
        <p className={styles.description}>
          It’s easy to start. Fill out a few questions on our form to receive a
          free discovery session.
        </p>
        <Button text='Discover' url='/contact' />
      </div>
      {/* <Image
        className={styles.blurBall}
        src='/images/blurBall3.png'
        alt='blur ball'
        width={500}
        height={500}
      /> */}
      <Image
        className={styles.blurBall2}
        src='/images/blurBall3.png'
        alt='blur ball'
        width={500}
        height={500}
      />
    </div>
  );
};

export default FinalCTA;
