import Hero from "@/components/Hero/Hero";
import Intro from "@/components/intro/Intro";
import Carousel from "@/components/carousel/Carousel";
import MeetFounder from "@/components/MeetFounder/MeetFounder";
import Who from "@/components/Who/Who";
import Questions from "@/components/Questions/Questions";
import Process from "@/components/Process/Process";
import Updates from "@/components/Updates/Updates";
import WorkTogether from "@/components/WorkTogether/WorkTogether";
import Testimonials from "@/components/Testimonials/Testimonials";
import data from "@/components/Testimonials/data.json";
import AboutUs from "@/components/AboutUs/AboutUs";
import OurServices from "@/components/OurServices/OurServices";
import OurWork from "@/components/OurWork/OurWork";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurServices />
      <OurWork />
      {/* <Intro /> */}
      {/* <Carousel /> */}
      {/* <MeetFounder /> */}
      {/* <Who /> */}
      <Questions />
      <Process />
      <Updates />
      <WorkTogether />
      <Testimonials testimonialData={data} />
    </>
  );
}
