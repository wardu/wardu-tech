import styles from "./WorkTogether.module.css";
import Image from "next/image";
import Button from "../Button/Button";

const WorkTogether = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lets Work Together</h2>
      <p className={styles.mainText}>
        Our unwavering approach stands tall, rock solid, as a testament to our
        prowess. We exult in cultivating profound connections, immersing
        ourselves in the intricacies of the businesses and brands we champion. A
        burning passion ignites within us, propelling us to unravel the very
        essence of your enterprise. With resolute dedication, we embark on a
        shared voyage, amplifying your success and weaving a tale of triumph
        together.
      </p>
      <Button url='/contact' text='Work With Us' />
      <div className={styles.imageFrame}>
        <Image
          className={styles.frame}
          src='/shadow-profile.png'
          width={200}
          height={300}
          alt='Your app on a phone'
        />
      </div>
    </div>
  );
};

export default WorkTogether;
