import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter, Bebas_Neue } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Viral Content Agent 1.0",
  description: "Generate ultra-viral short-form content scripts, hooks, captions, and hashtags in seconds."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, bebas.variable, "min-h-screen gradient-bg noise")}>{children}</body>
    </html>
  );
}
