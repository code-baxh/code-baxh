import { useEffect } from "react";
import ContactLayout from "../../layouts/contact";
import ContactDetails from "../../components/Contact/ContactDetails";
import ContactMap from "../../components/Contact/ContactMap";
import Head from "next/head";

const Index = () => {
  useEffect(() => {
    let body = document.querySelector("body");
    body.classList.add("bg-gr");
    body.classList.remove("d3-dark");
  }, []);


  const handleData = (data) => {

    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data)
    })

  }

  return (
    <><Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="images/logo.ico" />

      {/* Page-specific metadata */}
      <title>Contact Us - CodeBaxh</title>
      <meta name="description" content="Contact CodeBaxh for any coding-related inquiries or collaboration opportunities. We're here to help you with your coding journey." />
      <meta name="keywords" content="contact CodeBaxh, coding inquiries, collaboration, coding help" />
      <meta name="author" content="Your Name or Your Company" />
      {/* <meta name="robots" content="index, follow" /> */}
      <link rel="canonical" href="https://www.codebaxh.com/contact" />

      {/* Open Graph Meta Tags (for social media sharing) */}
      <meta property="og:title" content="Contact Us - CodeBaxh" />
      <meta property="og:description" content="Contact CodeBaxh for any coding-related inquiries or collaboration opportunities. We're here to help you with your coding journey." />
      <meta property="og:image" content="https://www.codebaxh.com/images/logo.png" />
      <meta property="og:url" content="https://www.codebaxh.com/contact" />
      <meta property="og:type" content="website" />

      {/* Twitter Card Meta Tags (for Twitter sharing) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contact Us - CodeBaxh" />
      <meta name="twitter:description" content="Contact CodeBaxh for any coding-related inquiries or collaboration opportunities. We're here to help you with your coding journey." />
      <meta name="twitter:image" content="https://www.codebaxh.com/images/logo.png" />
      <meta name="twitter:url" content="https://www.codebaxh.com/contact" />
    </Head>


      <ContactLayout footerClass="bg-gray">
        <ContactDetails handleData={handleData} />
        <ContactMap />
      </ContactLayout>
    </>
  )
}

export default Index