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
      image: "/images/services/responsive-tablet.svg",
      title: "Fully Responsive Design",
      text: `We use a mobile-first development approach. This is essential. Not only did Google decide to rank websites by their mobile performance over desktop performance since 2018, but also 60%+ of web traffic comes from mobile.
      Mobile-friendly designs are great for SEO and the user experience.
      We make sure your website looks great on all devices.`,
    },
    {
      image: "/images/services/web-dev-laptop.svg",
      title: "Web Development",
      text: `All of our websites are custom and bespoke.
      We use the same technology that underpins the world's most performant websites, such as Uber, Starbucks, OpenAI (ChatGPT), GoDaddy, and Netflix.
      
      Your high-performing website will enhance the customer experience and help you rank higher on Google.
     `,
    },
    {
      image: "/images/services/seo-graph.svg",
      title: "SEO & Analytics",
      text: "We optimise your website for search engines using a variety of strategies, including , loading optimisation, keyword research and content creation, all tailored to your specific industry and target audience. Our goal is to improve your website's ranking, increase organic traffic, driving more conversions. We also provide you with detailed analytics reports, so you can see how your website is performing and make informed decisions about your marketing strategy.",
    },
    {
      image: "/images/services/maintenance-cloud.svg",
      title: "Continued Support & Maintenance",
      text: "Our all-inclusive maintenance and support services are designed to ensure your website runs smoothly. We are committed to quick and effective problem resolution with a guarantee of fixing any critical issues on the same day. With our backing, you can concentrate on your primary task - managing your business.",
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
