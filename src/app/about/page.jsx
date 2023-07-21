import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

const About = () => {
  return (
    <>
      <h1 className={styles.title}>About Us</h1>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <p className={styles.blockquote}>
              In an age of automation and templates, we stand firmly by the
              belief that there is no substitute for the human touch and
              attention to detail in creating a truly meaningful and effective
              digital presence.
            </p>
          </div>
          <ul className={styles.list}>
            <li>
              <h3 className={styles.listTitles}>Digital Assets For Business</h3>
              <p>
                At Wardu Technologies, we believe in the transformative power of
                bespoke digital solutions. Our mission is about creating unique
                digital platforms that empower businesses, forge connections,
                and drive real-world results.
              </p>
            </li>
            <li>
              <h3 className={styles.listTitles}>Custom Web Development</h3>
              <p>
                Our speciality lies in sculpting visually arresting,
                user-friendly, and contemporary digital assets. We value the
                significance of intuitive navigation and sleek design, yet we
                acknowledge that your website should do more than just appeal
                aesthetically.
              </p>
            </li>
            <li>
              <h3 className={styles.listTitles}>SEO and Digital Marketing</h3>
              <p>
                We utilise strategic Search Engine Optimisation (SEO)
                techniques, implement inventive content marketing strategies
                through blog posts and articles, and exploit the potential of
                social media marketing to engage with your customers and display
                your work effectively.
              </p>
            </li>
            <li>
              <h3 className={styles.listTitles}>Maintenance and Support</h3>
              <p>
                Post-launch, we provide consistent website maintenance to ensure
                your site remains updated, secure, and running smoothly.
                Services include regular backups, security updates, and
                troubleshooting.
              </p>
            </li>
          </ul>
          <div>
            <h3 className={styles.listTitles}>Our Promise</h3>
            <p>
              {
                "At Wardu Technologies, we take pride in building more than just visually appealing websites. We create dynamic digital platforms that yield tangible results. Our approach melds years of proven experience with a commitment to honesty and transparency. We regard ourselves as your digital consultants, dedicated to guiding you based on your unique needs rather than selling you off-the-shelf solutions."
              }
            </p>

            <p>
              {
                "Such is our confidence in our skills and the superior calibre of our work that we offer a 100% refund guarantee on every project. Welcome to the Wardu Technologies experience - where performance converges with excellence."
              }
            </p>

            <div className={styles.buttonContainer}>
              <Button url='/contact' text='Work With Us' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
