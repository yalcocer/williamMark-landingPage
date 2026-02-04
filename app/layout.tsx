import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400","500","600", "700"],
  variable: "--font-outfit", // <--- ESTO vincula la fuente con tu CSS
});
const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ovo",   // <--- ESTO vincual la fuente con tu CSS
});



export const metadata: Metadata = {
  title: "Portfolio - Alccommunity",
  description: "",
};

export default function RootLayout({ 
  children 
}: {
   children: React.ReactNode;
   }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        { children }
      </body>
    </html>
  );
}
