import { useEffect } from "react";
import MainLayout from "../../layouts/main";
import Intro from "../../components/JobForm/Intro";

const Index = () => {
    useEffect(() => {
        let body = document.querySelector("body");
        body.classList.remove("bg-gr");
        body.classList.remove("d3-dark");
      }, []);
    
  return (
    <MainLayout footerClass="bg-dark">
      <Intro/>
    </MainLayout>
  )
}

export default Index