import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import { Anton } from "next/font/google";
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Wardu Technologies",
  description: "Creating Websites for moto enthusiasts",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <GoogleAnalytics />
      <body className={nunito.className}>
        <div className='container'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
