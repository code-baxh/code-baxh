import { useEffect } from "react";
import MainLayout from "../../layouts/main";
import Header from "../../components/About/Header";
import Intro from "../../components/About/Intro";
import Minimal from "../../components/About/Minimal";
import Services from "../../components/About/Services";
import CallAction from "../../components/About/CallAction";
import Blogs from "../../components/About/Blogs";

const Index = () => {
  useEffect(() => {
    let body = document.querySelector("body");
    body.classList.add("bg-gr");
    body.classList.remove("d3-dark");
  }, []);

  return (
    <MainLayout footerClass="bg-gray">
      <Header />
      <Blogs/>
      <Intro />
      <Minimal />
      <Services />
      <CallAction />
    </MainLayout>
  )
}

export default Index