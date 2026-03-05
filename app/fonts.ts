import { Inter, Audiowide, Outfit } from "next/font/google";
import localFont from "next/font/local";

// Google fonts
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// ✅ Figma font
export const generalSans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/GeneralSans-Medium.woff2",
      weight: "500",
    },
  ],
  display: "swap",
});
