import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";

const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <div className={inter.className}>
          <Component {...pageProps} />
        </div>
      </SnackbarProvider>
    </>
  );
}
