import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";
import Carousel from "@/components/carousel/Carousel";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Carousel />
    </>
  );
}
