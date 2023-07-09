import styles from "./Process.module.css";
import Image from "next/image";
import Button from "../Button/Button";

const processData = {
  card1: {
    title: "Process",
    description:
      "Part one of your new website experience is your design phase. But Wardu Technologies websites are more than just a good looking websites. A great website is about mobile compatibility, user experience, functionality, and structuring your website to lead more customers to your product or service.",
    image: "/paintRoller.svg",
  },
  card2: {
    title: "Build",
    description:
      "After approval is received for the design, we delve into the realm of building. Armed with the latest open-source software, we meticulously breathe life into your website, adhering to the sacred blueprint provided by the design. Focus on SEO and loading speed performance takes centre stage at this point.",
    image: "/handshake.svg",
  },
  card3: {
    title: "Support",
    description:
      "Count on us for seamless updates and unwavering support, propelling your online presence to unparalleled heights. Prepare for a digital voyage characterised by rapidity and reliability.",
    image: "/anvil.svg",
  },
};

const Card = ({ title, description, image }) => (
  <div className={styles.card}>
    <Image src={image} alt={title} width={70} height={70} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const Process = () => {
  return (
    <div className={styles.container}>
      {Object.values(processData).map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}

      <div className={styles.lowerContainer}>
        <h2>Ready to get started?</h2>
        <Button url='/contact' text='Work With Us' />
        <Image src='/helmet.svg' alt='helmet' width={70} height={70} />
      </div>
    </div>
  );
};

export default Process;
