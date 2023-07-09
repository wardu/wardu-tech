import styles from "./Updates.module.css";
import Image from "next/image";

const Updates = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Updates & Service</h2>
      <p className={styles.mainText}>
        Every Wardu Technologies website includes unlimited updates to content
        and photos. Just shoot us an email and we guarantee to have those
        changes made within 3 business days... but we usually do it a lot
        quicker then that!
      </p>
      <div className={styles.imageFrame}>
        <Image
          className={styles.frame}
          src='/ktmPhone.png'
          width={200}
          height={300}
          alt='Your app on a phone'
        />
      </div>
    </div>
  );
};

export default Updates;
