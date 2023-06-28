import styles from "./MeetFounder.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const MeetFounder = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Meet the founder</h2>
        <Image
          src='/shadow-profile.png'
          width={100}
          height={200}
          alt='Warren'
        />
        <p className={styles.description}>
          I'm Warren, founder and coder at Wardu Technologies. Passionate about
          motorcycles and unwavering performance. We strive for the best,
          rejecting mediocrity. Join us to experience digital greatness.
        </p>
        <div className={styles.button}>
          <Button url='/contact' text='Work With Us' />
        </div>
      </div>
    </div>
  );
};

export default MeetFounder;
