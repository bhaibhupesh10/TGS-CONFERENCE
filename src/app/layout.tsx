import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/customComponents/Navbar";
import Footer from "@/components/customComponents/Footer";
import WhatsAppBot from "@/components/customComponents/WhatsAppBot";
//import ParticipateNowButton from "@/components/customComponents/ParticipateNow";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TGS Kubernetes Edition",
  description: "The Growth String Initiative",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{backgroundColor:"black"}}
      >
        <Navbar/>
        {children}
        <WhatsAppBot></WhatsAppBot>
        
        <Footer/>
      </body>
    </html>
  );
}
