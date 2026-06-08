import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yazaira Luna — Portfolio",
  description: "Yazaira Luna is an Advertising & Media professional specializing in creative strategy, brand management, social media, and creative production.",
  openGraph: {
    title: "Yazaira Luna — Portfolio",
    description: "Creative strategy, brand storytelling, and editorial design.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:wght@300;400;500;600&family=Over+the+Rainbow&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        <Navbar />
        <main className="pt-[62px]">{children}</main>
      </body>
    </html>
  );
}
