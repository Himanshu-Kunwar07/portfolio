import type { Metadata, Viewport } from "next";
import CommandPalette from "@/components/CommandPalette";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

export const metadata: Metadata = {
  title: "Himanshu Kunwar | Full Stack Developer",
  description:
    "Full stack developer building responsive web apps, real-time systems and data-driven products with React, Node.js, PostgreSQL and WebSockets.",
};

export const viewport: Viewport = {
  themeColor: "#07090f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <Nav />
        <CommandPalette />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
