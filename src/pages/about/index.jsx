import { useEffect } from "react";
import MainLayout from "../../layouts/main";
import Header from "../../components/About/Header";
import Intro from "../../components/About/Intro";
import Minimal from "../../components/About/Minimal";
import Services from "../../components/About/Services";
import CallAction from "../../components/About/CallAction";
import Blogs from "../../components/About/Blogs";
import Head from "next/head";

const Index = () => {
  useEffect(() => {
    let body = document.querySelector("body");
    body.classList.add("bg-gr");
    body.classList.remove("d3-dark");
  }, []);

  return (
    <> <Head>
      <link rel="stylesheet" href="/assets/css/style.css" />
      <link rel="stylesheet" href="/assets/css/base.css" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="images/logo.ico" />

      {/* Page-specific metadata */}
      <title>About Us - CodeBaxh</title>
      <meta name="description" content="Learn about CodeBaxh, your trusted source for coding tutorials, programming resources, and software development tips. Discover our mission, team, and dedication to helping you succeed in the world of coding." />
      <meta name="keywords" content="about CodeBaxh, coding tutorials, programming resources, software development, coding success" />
      <meta name="author" content="Your Name or Your Company" />
      {/* <meta name="robots" content="index, follow" /> */}
      <link rel="canonical" href="https://www.codebaxh.com/about" />

      {/* Open Graph Meta Tags (for social media sharing) */}
      <meta property="og:title" content="About Us - CodeBaxh" />
      <meta property="og:description" content="Learn about CodeBaxh, your trusted source for coding tutorials, programming resources, and software development tips. Discover our mission, team, and dedication to helping you succeed in the world of coding." />
      <meta property="og:image" content="https://www.codebaxh.com/images/logo.png" />
      <meta property="og:url" content="https://www.codebaxh.com/about" />
      <meta property="og:type" content="website" />

      {/* Twitter Card Meta Tags (for Twitter sharing) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Us - CodeBaxh" />
      <meta name="twitter:description" content="Learn about CodeBaxh, your trusted source for coding tutorials, programming resources, and software development tips. Discover our mission, team, and dedication to helping you succeed in the world of coding." />
      <meta name="twitter:image" content="https://www.codebaxh.com/images/logo.png" />
      <meta name="twitter:url" content="https://www.codebaxh.com/about" />

    </Head>
      <MainLayout footerClass="bg-gray">
        <Header />
        <Blogs />
        <Intro />
        <Minimal />
        <Services />
        <CallAction />
      </MainLayout>
    </>
  )
}

export default Index