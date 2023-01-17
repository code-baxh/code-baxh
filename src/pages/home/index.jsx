import { useEffect } from "react";
import MainLayout from "../../layouts/main";
import Header from "../../components/Home/Header";
import Services from "../../components/Home/Services";
import Block from "../../components/Home/Block";
import Intro from "../../components/Home/Intro";


const Index = () => {
  useEffect(() => {
    let body = document.querySelector("body");
    body.classList.remove("bg-gr");
    body.classList.remove("d3-dark");
  }, []);

  return (
    <MainLayout footerClass="bg-dark">
      <Header />
      <Services />
      <Block />
      <Intro/>
    </MainLayout>
  )
}

export default Index