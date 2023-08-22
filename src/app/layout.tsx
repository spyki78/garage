import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garage",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
          <Header />
          {children}
          <ScrollToTopButton />
          <Footer />   
      </body>
    </html>
  );
}
