import "@/styles/globals.css";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </>
  );
}
