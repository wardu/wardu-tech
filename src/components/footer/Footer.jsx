import styles from "./Footer.module.css";
import Link from "next/link";

// import icons
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { SiTwitter } from "react-icons/si";

const Footer = () => {
  const style = { color: "white", fontSize: "2.5em" };
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link href='/'>Home</Link>
        <Link href='/pricing'>Pricing</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </div>
      <div>email: wardu@wardutech.com</div>
      <div className={styles.socials}>
        <a href='https://www.facebook.com'>
          <BsFacebook style={style} />
        </a>

        <GrInstagram style={style} />
        <SiTwitter style={style} />
      </div>
    </div>
  );
};

export default Footer;
Footer;
