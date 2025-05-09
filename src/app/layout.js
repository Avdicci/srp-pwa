import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.css';
import Navbar from '../components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SRP PWA",
  description: "A simple SRP-based Progressive Web App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background-section text-black`}
      >
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
