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
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CodeBaxh - Your Source for Coding Resources</title>
        <meta name="description" content="CodeBaxh is your one-stop destination for coding tutorials, programming resources, and software development tips. Learn to code, improve your skills, and stay up-to-date with the latest tech trends." />
        <meta name="keywords" content="code, coding tutorials, programming resources, software development, learn to code, tech trends" />
        <meta name="author" content="Your Name or Your Company" />
        {/* <meta name="robots" content="index, follow" /> */}
        <link rel="canonical" href="https://www.codebaxh.com/" />

        <meta property="og:title" content="CodeBaxh - Your Source for Coding Resources" />
        <meta property="og:description" content="CodeBaxh is your one-stop destination for coding tutorials, programming resources, and software development tips. Learn to code, improve your skills, and stay up-to-date with the latest tech trends." />
        <meta property="og:image" content="https://www.codebaxh.com/images/logo.png" />
        <meta property="og:url" content="https://www.codebaxh.com/" />
        <meta property="og:type" content="website" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CodeBaxh - Your Source for Coding Resources" />
        <meta name="twitter:description" content="CodeBaxh is your one-stop destination for coding tutorials, programming resources, and software development tips. Learn to code, improve your skills, and stay up-to-date with the latest tech trends." />
        <meta name="twitter:image" content="https://www.codebaxh.com/images/logo.png" />
        <meta name="twitter:url" content="https://www.codebaxh.com/" />

        <link rel="icon" type="image/x-icon" href="/images/logo.ico" />

        {/* <link rel="icon" type="image/x-icon" href="/images/logo.ico"></link> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /> */}
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
