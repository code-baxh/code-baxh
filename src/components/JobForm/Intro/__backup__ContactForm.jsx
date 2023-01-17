import { useState } from "react";
import { Formik, Form, Field } from "formik";

const ContactForm = (props) => {


  const [formData, setFormData] = useState({
        title: "",
        firstname: "",
        lastname: "",
        email: "",
        number: "",
        cv: ""
  });

  const [errMessage, setErrMessage] = useState(null);
  const [successMsg, setSuccessMsg]= useState(null);


  // Messages
  const required = "This field is required";
  const maxLength = "Your input exceed maximum length";
  
  
  const validateUserName = value => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 12) {
      error = maxLength;
    }
    return error;
  };
  
  const validateName = value => {
    let error;
    if (!value) {
      error = required;
    } else if (value.length > 12) {
      error = maxLength;
    }
    return error;
  };
  
  const validateEmail = value => {
    let error;
    if (!value) {
      error = required;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  };
  
  const validateMobileNumber = value => {
    let error;
    if (value.length > 12) {
      error = maxLength;
    }
    return error;
  };
  
  
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
  };
  
    return (
      <Formik
        initialValues={{
          title: "",
          firstname: "",
          lastname: "",
          email: "",
          mobilenumber: "",
          cv: ""
        }}
        onSubmit={handleSubmit}
      >


          <div className="container justify-content-center">
            <div className="row justify-content-center">
            <div className="col-sm-12 justify-content-center">
              <h3 className="text-center mb-4">Application</h3>
            </div>
          
            <div className="col-md-8">
              <Form>
              <div className="form-group dropdown mb-4">
                  <span className="mb-4">Job Title</span><br/>
                  <Field as="select" name="color" className="form-control">
                    <option value="red">SOC Engineer</option>
                    <option value="green">Senior Information Security Engineer</option>
                    <option value="blue">Identity Access Management Analyst</option>
                    <option value="blue">Cloud Security Engineer</option>
                    <option value="blue">OT Cyber Security Practitioner</option>
                    <option value="blue">Cyber Security Incident Response Analyst</option>
                    <option value="blue">Cyber Risk Consultant BCM</option>
                    <option value="blue">Cyber Security Analyst</option>
                  </Field>
              </div>
             
                <div className="form-group mb-4">
                  <span className="mb-4">First Name</span>
                  <Field       
                    className="form-control"    
                    type="text"
                    placeholder="Firstname"
                    required="required"
                    name="firstname"
                  />
                </div>

                  
                <div className="form-group mb-4">
                <span className="mb-4">Last Name</span>
                  <Field     
                    className="form-control"
                    type="text"
                    placeholder="Lastname"
                    required="required"
                    name="lastname"
                  />
                </div>

            
                <div className="form-group mb-4">
                <span className="mb-4">Email</span>
                  <Field
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required="required"
                  />

                </div>


                <div className="form-group mb-4">
                <span className="mb-4">Telephone Number</span>
                  <Field
                   className="form-control"
                    type="text"
                    placeholder="Mobile number"
                    required="required"
                    name="mobilenumber"
                  />
                </div>

                
                <span className="mb-3 mr-2">Curriculum Vitae</span>
                <div className="form-group mb-4 upload-btn">
                <Field type="file" id="myFile" className="form-control" name="myFile" />
                </div>
                

                <div className="form-group text-center">

                {
                errMessage && <div className="messages mb-4">{ errMessage }</div>
                }

                {
                successMsg && <div className="messages mb-4">{ successMsg }</div>
                }

                  <button className="btn btn-primary" type="submit">
                    Send Application
                  </button>
                </div>

              </Form>
              </div>
            </div>
          </div>
      </Formik>
    );
  }


export default ContactForm