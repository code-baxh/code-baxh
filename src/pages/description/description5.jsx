import { useEffect } from "react";
import MainLayout from "../../layouts/main";
import Intro from "../../components/Description/Intro/description5";

const Description5 = () => {
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

export default Description5