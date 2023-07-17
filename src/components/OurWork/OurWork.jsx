import styles from "./OurWork.module.css";
import Image from "next/image";
import Button from "../Button/Button";

import { Bodoni_Moda } from "next/font/google";
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function Card({ image, title, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <Image src={image} alt={title} width={708} height={424} />
      </div>
      <div className={`${styles.textWrapper} ${bodoni.className}`}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardText}>{text}</p>
      </div>
    </div>
  );
}

const OurWork = () => {
  const cards = [
    {
      image: "/images/portfolio/imoto-design.png",
      title: "i-Moto",
      text: `This complete redesign of this landing page for a motorcycle mechanic involves a comprehensive rebranding and an innovative web design. 
      The transformation enhances the visual appeal, elevating the brand's digital presence.`,
    },
  ];

  return (
    <div className={styles.outter}>
      <div className={bodoni.className}>
        <h2 className={styles.title}>Our Work</h2>
      </div>
      <div className={styles.outterContainer}>
        <div className={styles.container}>
          {cards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          className={styles.button}
          url='/contact'
          text='Enquire &nbsp;&nbsp;&nbsp;&nbsp;  →'
        />
      </div>
    </div>
  );
};

export default OurWork;
