import styles from "./page.module.css";

const PricingCard = ({ title, price, benefits }) => (
  <div className={styles.cardContainer}>
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardText}>{price}</p>
      <ul>
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
    <button className={styles.cardButton}>Buy Now</button>
  </div>
);

const Pricing = () => {
  const pricingOptions = [
    {
      title: "Ultimate",
      price: "From £1199",
      benefits: [
        "6+ Pages",
        "Mobile First design - fully responsive",
        "Built with industry leading technologies, Next.js (used by Netflix, Uber, TikTok, etc)",
        "Easy to Edit",
        "SEO Optimisation",
        "Accept Payments Online",
        "Google Analytics",
        "Advanced Features (moving images, animations, etc)",
        "Integrated Video",
        "Links to Social Media",
        "Integrated Google Maps",
        "3 rounds of revisions",
        "Contact Form",
        "100 days of post-launch support",
      ],
    },

    {
      title: "Premium",
      price: "From £699",
      benefits: [
        "Up to 6 Pages",
        "Easy to Edit",
        "Mobile First design - fully responsive",
        "SEO Optimisation",
        "Google Analytics",
        "Contact Form",
        "Links to Social Media",
        "Advanced Features (moving images, animations, etc)",
        "2 rounds of revisions",
        "50 days of post-launch technical support",
      ],
    },
    {
      title: "Basic",
      price: "From £299",
      benefits: [
        "Single Page Website",
        "Easy to Edit",
        "Mobile First design - fully responsive",
        "Built using same technology as Premium & Ultimate (making upgrades easy)",
        "1 round of revisions",
        "Basic Contact Form section",
        "Links to social media",
        "15 days of post-launch technical support",
      ],
    },
  ];

  return (
    <>
      <h1 className={styles.title}>Pricing</h1>
      <div className={styles.container}>
        {pricingOptions.map((option, index) => (
          <PricingCard key={index} {...option} />
        ))}
      </div>
    </>
  );
};

export default Pricing;
