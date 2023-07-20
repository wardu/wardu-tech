import Hero from "@/components/Hero/Hero";
import Testimonials from "@/components/Testimonials/Testimonials";
import data from "@/components/Testimonials/data.json";
import AboutUs from "@/components/AboutUs/AboutUs";
import OurServices from "@/components/OurServices/OurServices";
import OurWork from "@/components/OurWork/OurWork";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import { Cookie } from "next/font/google";
import CookieConsent from "@/components/CookieConsent/CookieConsent";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurServices />
      <OurWork />
      <Testimonials testimonialData={data} />
      <FinalCTA />
      <CookieConsent />
    </>
  );
}
