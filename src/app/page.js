import Hero from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";
import Carousel from "@/components/carousel/Carousel";
import MeetFounder from "@/components/MeetFounder/MeetFounder";
import Who from "@/components/Who/Who";
import Questions from "@/components/Questions/Questions";
import Process from "@/components/Process/Process";
import Updates from "@/components/Updates/Updates";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Carousel />
      <MeetFounder />
      <Who />
      <Questions />
      <Process />
      <Updates />
    </>
  );
}
