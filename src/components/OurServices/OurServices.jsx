import styles from "./OurServices.module.css";
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
        <Image src={image} alt={title} width={100} height={200} />
      </div>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
}

const OurServices = () => {
  const cards = [
    {
      image: "/images/services/web-dev-laptop.svg",
      title: "Web Development",
      text: `We create professional and great looking websites that enhance your customer’s experience.
      Embracing a mobile-first development approach is vital in today's digital age. As mobile devices have become the primary tool for accessing the internet, it's essential to design web assets that not only look impressive but also deliver exceptional performance on mobile platforms.`,
    },
    {
      image: "/images/services/responsive-tablet.svg",
      title: "Fully Responsive Design",
      text: `Embracing a mobile-first development approach is vital in today's digital age. As mobile devices have become the primary tool for accessing the internet, it's essential to design web assets that not only look impressive but also deliver exceptional performance on mobile platforms. Enhance your customer experience with optimised, mobile-friendly designs.`,
    },
    {
      image: "/images/services/seo-graph.svg",
      title: "SEO & Analytics",
      text: "comprehensive SEO services designed to elevate your business's online presence. We understand that visibility is key in the digital age, and our team of SEO experts is committed to optimizing your website for search engines. We employ a variety of strategies, including keyword research, on-page and off-page optimization, and content creation, all tailored to your specific industry and target audience. Our goal is to improve your website's ranking, increase organic traffic, and ultimately drive more conversions. With our SEO services, we help your business stand out in the crowded digital landscape.",
    },
    {
      image: "/images/services/maintenance-cloud.svg",
      title: "Continued Support & Maintenance",
      text: "We give you comprehensive maintenance and support services designed to keep your systems running smoothly. Our dedicated team of experts is available around the clock to troubleshoot issues, perform regular system checks, and implement updates as needed. We understand that downtime can be costly, so we strive to resolve issues swiftly and efficiently. Our proactive approach to maintenance helps prevent potential problems, ensuring your operations continue uninterrupted. With our support, you can focus on what you do best - running your business.",
    },
  ];

  return (
    <div className={styles.outter}>
      <div className={bodoni.className}>
        <h2 className={styles.title}>Our Services</h2>
      </div>
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
      <div className={styles.buttonWrapper}>
        <Button
          className={styles.button}
          url='/contact'
          text='Start your project &nbsp;&nbsp;&nbsp;&nbsp;  →'
        />
      </div>
    </div>
  );
};

export default OurServices;
