import { useEffect } from "react";
import MainLayout from "../../layouts/main";
import Header from "../../components/Careers/Header";
import Intro from "../../components/Careers/Intro";
import Services from "../../components/Careers/Services";


const Index = () => {

  useEffect(() => {
    let body = document.querySelector("body");
    body.classList.add("bg-gr");
    body.classList.remove("d3-dark");
  }, []);

  return (
    <MainLayout footerClass="bg-gray">
      <Header />
      <Intro />
      <Services />
    </MainLayout>
  )
  
}

export default Index