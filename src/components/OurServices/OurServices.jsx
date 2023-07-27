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
      image: "/images/services/seo-graph.svg",
      title: "1. Assessment & Strategy",
      text: `We look at your current website and digital presence to identify areas that can be improved. We then create a strategy to help you achieve your goals. After the audit, We will also provide you with a detailed report outlining our findings and recommendations.
     
      

      A pretty website is useless if it doesn't convert visitors into customers. We will work with you to create a website that is not only beautiful but also functional and effective.`,
    },
    {
      image: "/images/services/web-dev-laptop.svg",
      title: "2. Web Development",
      text: `A well designed, performant website adds credibility and a professional touch to any business or individual's brand. It's a space they fully own and control, unlike their profiles on social media platforms. Every website that we build is custom and bespoke. We don't use templates or themes. We use technologies that can scale with your business and are easy to maintain.
      
      A high-performance website will enhance your customer's experience and help you rank higher on Google.

     `,
    },
    {
      image: "/images/services/responsive-tablet.svg",
      title: "3. Feedback & Revisions",
      text: `Feedback is a great opportunity to reassess and hone the strategy. Confidence and belief that a strategy will work is vital for success. We will work with you to make sure that your website is exactly how you want it. 
      
      We optimise your website for search engines using a variety of strategies, including , loading optimisation, keyword research and content creation, all tailored to the industry and target audience. Our goal is to improve your websites ranking, increase organic traffic, driving more conversions.`,
    },
    {
      image: "/images/services/maintenance-cloud.svg",
      title: "4. Continued Support & Maintenance",
      text: `Our all-inclusive maintenance and support services are designed to ensure your website runs smoothly. We are committed to quick and effective problem resolution with a guarantee of fixing any critical issues on the same day. 
      
      Too many websites are left to rot after they are launched. We will make sure that your website is always up to date and secure.
      
      With our backing, you can concentrate on your primary task - managing your business.`,
    },
  ];

  return (
    <div className={styles.outter}>
      <div className={bodoni.className}>
        <h2 className={styles.title}>Our Method</h2>
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
