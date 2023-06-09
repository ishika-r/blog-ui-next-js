import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Navigation bar */}
      {/* <Navbar /> */}
      <Component {...pageProps} />
      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
}
