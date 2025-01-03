import type { Metadata } from "next";

import localFont from "next/font/local";
import { Outfit, Roboto } from "next/font/google";
import "./globals.css";

const carbonic = localFont({
  src: [
    {
      path: "./fonts/POICarbonicTrial-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/POICarbonicTrial-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/POICarbonicTrial-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/POICarbonicTrial-ExtraLightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/POICarbonicTrial-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/POICarbonicTrial-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/POICarbonicTrial-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/POICarbonicTrial-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/POICarbonicTrial-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/POICarbonicTrial-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/POICarbonicTrial-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/POICarbonicTrial-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/POICarbonicTrial-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/POICarbonicTrial-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/POICarbonicTrial-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/POICarbonicTrial-ExtraBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-carbonic",
});

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "BitRest",
  description: "Invest in Real Estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${carbonic.variable} ${outfit.variable} ${roboto.variable} bg-custom-gradient font-carbonic antialiased min-h-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
