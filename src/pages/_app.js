import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <div className="wrapper">
          <SessionProvider session={session}>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </SessionProvider>
        </div>
      </div>
    </>
  );
}

export default MyApp;
