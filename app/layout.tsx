import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ColorProvider } from "./contexts/ColorContext";
import ColorPicker from "./components/ColorPicker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marloes Verhagen - Interim HR-professional en teamcoach",
  description: "Ik help bedrijven in de maak-industrie om mens, proces en resultaat weer op 1 lijn te krijgen. Ik maak verandering werkbaar!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ColorProvider>
          {children}
          <ColorPicker />
        </ColorProvider>
      </body>
    </html>
  );
}
