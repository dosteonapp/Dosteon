import { Inria_Serif, Figtree } from "next/font/google";
import "./globals.css";

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inria",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

export const metadata = {
  title: "Dosteon - Run your food business without guesswork",
  description: "The operating system for Africa's food supply chain, built for restaurants, cafés, and suppliers to grow together.",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inriaSerif.variable} ${figtree.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
