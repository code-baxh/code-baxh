/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import appData from '../../data/app.json';
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import useSWR from 'swr';

const Footer = ({ classText }) => {
  
    const [formData2, setFormData2] = useState({
        footerEmail: "",
        });

  const [errMessage2, setErrMessage2] = useState(null);
  const [successMsg2, setSuccessMsg2]= useState(null);


  const sendData = async (data) => {
    console.log(data);
    
}

  const validateForm2 = (formValues2) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues2.footerEmail)) {
      setErrMessage2('Email is invalid');
      return false;
    }
    return true;
  }


  const emailHandler  = (values, { resetForm }) => {
    if (validateForm2(values)) {
      setErrMessage2(null);
      sendData(values);
      setTimeout(() => {
         setSuccessMsg2("Thank you for subscribing to our newsletter!");
         resetForm();
      }, 200);

    }
  };


 

  return (
    <footer className={ classText ? classText : '' }>
      <div className="container">
          <div className="row">
              <div className="col-lg-4">
                  <div className="item md-mb50">
                      <div className="title">
                          <h5>Contact Us</h5>
                      </div>
                      <ul>
                        <li>
                            <span className="icon pe-7s-map-marker"></span>
                            <div className="cont">
                                <h6>Official Address</h6>
                                <p>{ appData.address.street }, { appData.address.postcode } <br/> { appData.address.city } <br/> { appData.address.country }</p>
                            </div>
                        </li>
                        <li>
                            <span className="icon pe-7s-mail"></span>
                            <div className="cont">
                                <h6>Email Us</h6>
                                <p>{ appData.email }</p>
                            </div>
                        </li>
                        <li>
                            <span className="icon pe-7s-call"></span>
                            <div className="cont">
                                <h6>Contact Us</h6>
                                <p>{ appData.phone }</p>
                            </div>
                        </li>
                      </ul>
                  </div>
              </div>
              <div className="col-lg-4">
                  
                  
                  <div className="item md-mb50">
                      <div className="title">
                        <h5>Useful Links</h5>
                      </div>

                      <div className="copy-right">
                        <Link href="/tos">
                            <a className="">Terms of Service</a>
                          </Link>

                          <br/><br/>

                          <Link href="/policy">
                            <a className="">Privacy Policy</a>
                          </Link>
                 
                      </div>          
                  </div>


              </div>
              <div className="col-lg-4">
                  <div className="item">
                      <div className="logo">
                          <h4>Touchque Ltd</h4>
                      </div>
                      
                      
                      <div className="copy-right">
                          <div className="social">
                          <span className="pr-3"><strong> Connect With us</strong></span>
             
                          <Link href="https://www.linkedin.com/company/touchque-ltd/">
                           <a><i className="fab fa-linkedin-in"></i></a>
                          </Link>
                          </div>

                          <br/>

                          <p>
                              { appData.footerText }{' '}
                                <Link href="#0">
                                    <a>{ appData.themeAuthor }</a>
                                </Link>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer