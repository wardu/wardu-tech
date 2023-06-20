import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";

import { Anton } from "next/font/google";
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

import { Bangers } from "next/font/google";
const bangers = Bangers({
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
      <body className={bangers.className}>
        <div className='container'>{children}</div>
      </body>
    </html>
  );
}
