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
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      ) : null}
      <body className={bangers.className}>
        <div className='container'>{children}</div>
      </body>
    </html>
  );
}
