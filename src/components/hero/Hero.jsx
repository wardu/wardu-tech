import styles from "./Hero.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Image
        src={"/bike-dash.jpg"}
        fill={true}
        alt='motorcycle display'
        quality={100}
        sizes='100vw'
        style={{ objectFit: "cover", objectPosition: "center", opacity: 0.2 }}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>HIGH PERFORMANCE</h2>
        <h1 className={styles.title}>WEBSITES FOR MOTORCYCLE WORKSHOPS</h1>
        <div className={styles.button}>
          <Button url='/contact' text='Work With Us' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
