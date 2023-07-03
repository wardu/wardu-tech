import Button from "../Button/Button";
import styles from "./Questions.module.css";

const Questions = () => {
  return (
    <div className={styles.container}>
      <h2>here to answer your questions</h2>
      <p>
        Wardus consultations unlock the doors to comprehending your business
        objectives and marketing cravings. In just moments, we delve deep,
        forging a powerful connection. Embrace this opportunity to intertwine
        destinies, as we embark on an exhilarating journey together!
      </p>
      <Button url='/contact' text='Work With Us' />
    </div>
  );
};

export default Questions;
Questions;
