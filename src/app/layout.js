import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
});

// https://ibb.co/4JRSXB9

export const metadata = {
  title: "Wardu Technologies",
  description:
    "Creating High Performance Websites for High Performance Individuals",
  url: "https://wardu.tech",

  openGraph: {
    title: "Wardu Technologies",
    description:
      "Creating High Performance Websites for High Performance Individuals",
    url: "https://wardu.tech",
    images: "https://ibb.co/4JRSXB9",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <GoogleAnalytics />
      <body className={montserrat.className}>
        <div className='container'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
