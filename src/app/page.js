import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";
import Carousel from "@/components/carousel/Carousel";
import MeetFounder from "@/components/MeetFounder/MeetFounder";
import Who from "@/components/Who/Who";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Carousel />
      <MeetFounder />
      <Who />
    </>
  );
}
