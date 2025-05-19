import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import RegisterSW from './register-sw';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="theme-color" content="#FC6B03" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background-section text-black`}
      >
        <Navbar />
        <main className="p-4">{children}</main>
        <RegisterSW />
      </body>
    </html>
  );
}
