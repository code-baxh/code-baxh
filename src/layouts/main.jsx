/* eslint-disable @next/next/no-css-tags */
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import { useRouter } from 'next/router';

const MainLayout = ({ children, footerClass }) => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    var navbar = navbarRef.current;

    var path = String(router.pathname);
    path = path.replace('/', '');

    
    if (window.pageYOffset > 300) navbar.classList.add("nav-scroll");
    else if ("tos" == path) navbar.classList.add("nav-scroll");
    else if ("policy" == path) navbar.classList.add("nav-scroll");
    else if (path.includes("description")) navbar.classList.add("nav-scroll");
    else if ("jobform" == path) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");

    
 
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) navbar.classList.add("nav-scroll");
      else if ("tos" == path) navbar.classList.add("nav-scroll");
      else if ("policy" == path) navbar.classList.add("nav-scroll");
      else if (path.includes("description")) navbar.classList.add("nav-scroll");
      else if ("jobform" == path) navbar.classList.add("nav-scroll");
      else navbar.classList.remove("nav-scroll");
    });
  }, [navbarRef]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/base.css" />
      </Head>

      <Navbar navbarRef={navbarRef} logoRef={logoRef} />
      { children }
      <Footer classText={footerClass} />
    </>
  );
};

export default MainLayout;
