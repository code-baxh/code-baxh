import { useEffect } from "react";
import ContactLayout from "../../layouts/contact";
import ContactDetails from "../../components/Contact/ContactDetails";
import ContactMap from "../../components/Contact/ContactMap";

const Index = () => {
  useEffect(() => {
    let body = document.querySelector("body");
    body.classList.add("bg-gr");
    body.classList.remove("d3-dark");
  }, []);


const handleData = (data) => {

    fetch('/api/contact',{
      method: 'post',
      body: JSON.stringify(data)
    })

}

  return (
    <ContactLayout footerClass="bg-gray">
      <ContactDetails handleData={handleData}/>
      <ContactMap />
    </ContactLayout>
  )
}

export default Index