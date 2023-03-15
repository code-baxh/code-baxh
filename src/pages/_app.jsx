import Head from "next/head";
import Script from "next/script";
import '../styles/globals.css'
import '../styles/careers.css';
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/scrollToTop";
import { useRouter } from 'next/router';
import { pageview } from "../../lib/ga";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };

    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);


  return (
    <>


      <Head>
        <title>Code Baxh</title>
        <link rel="icon" type="image/x-icon" href="/images/logo.ico"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                        page_path: window.location.pathname,
                    });
                    `,
            }}
          />
      </Head>


      <Cursor />
      <Component {...pageProps} />
      <ScrollToTop />

      <Script id="wow" src="/assets/js/wow.min.js" />
      <Script id="charming" src="/assets/js/charming.min.js" />
      <Script id="isotope" src="/assets/js/isotope.pkgd.min.js" />
      <Script id="init" src="/assets/js/main.js" strategy="lazyOnload" />
      <Script id="simpleParallax" src="/assets/js/simpleParallax.min.js" strategy="beforeInteractive" />
      <Script id="splitting" src="/assets/js/splitting.min.js" strategy="beforeInteractive" />
      <Script id="bootstrap" src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
    </>
  )
}

export default MyApp;
