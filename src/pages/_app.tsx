import { ThemeProvider } from "@/contexts/ThemeContext";
import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import {
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
} from "chart.js";
import Chart from "chart.js/auto";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

export default function App({ Component, pageProps }: AppProps) {
  Chart.register(
    CategoryScale,
    LinearScale,
    LineController,
    PointElement,
    LineElement
  );

  return (
    <>
      <ThemeProvider>
        <SnackbarProvider maxSnack={3}>
          <div className={inter.className}>
            <Component {...pageProps} />
          </div>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
}
