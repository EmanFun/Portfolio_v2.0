import localFont from "next/font/local";
import { Inconsolata, Roboto } from "next/font/google";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const robot = localFont({
  src: [
    {
      path: "../assets/fonts/roboto/RobotoMono-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/roboto/RobotoMono-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-family-title",
});

const consolas = localFont({
  src: [
    {
      path: "../assets/fonts/consolas/Consolas.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/consolas/Consolas-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-family-text",
});

export { consolas, robot, roboto, inconsolata };
