import { useState } from "react";
import { Formik, Form, Field } from "formik";

const ContactForm = (props) => {

  const {handleData} = props;

  const [formData, setFormData] = useState({
    name: "",
    companyName:"",
    email: "",
    message: ""
  });

  const [errMessage, setErrMessage] = useState(null);
  const [successMsg, setSuccessMsg]= useState(null);

  const validateForm = (formValues) => {
    console.log(formValues);
    if (!formValues.name || !formValues.companyName || !formValues.email || !formValues.message) {
      setErrMessage('Please fill in all fields');
      return false;
    } 
    if (formValues.name.length < 5) {
      setErrMessage('Name must be at least 5 characters');
      return false;
    }
    if (formValues.message.length < 10) {
      setErrMessage('Message must be at least 10 characters');
      return false;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
      setErrMessage('Email is invalid');
      return false;
    }
    return true;
  }

  const handleSubmit = (values, { setSubmitting, resetForm }) => {

    if (validateForm(values)) {
      setErrMessage(null);
      setTimeout(() => {
         handleData(values);
         setSuccessMsg("Thank you. We have received your message and will get back to you shortly.");
         resetForm();
      }, 200);
      console.log(values);
    }

  };

  return (
    <div className="col-lg-6">
      <div className="form md-mb50">
        <h4 className="extra-title mb-50">Get In Touch.</h4>

        <Formik
          initialValues={{
            name: "",
            companyName: "",
            email: "",
            message: ""
          }}
          onSubmit={handleSubmit}
          
        >
         
          <Form>
           

            <div className="controls">
              <div className="form-group">
                <Field
                  id="form_name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required="required"
                />
              </div>

           
              <div className="form-group">
                <Field
                  id="form_company_name"
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  required="required"
                />
              </div>

              <div className="form-group">
                <Field
                  id="form_email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required="required"
                />
              </div>

              <div className="form-group mb-4">
                <Field
                  as="textarea"
                  id="form_message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required="required"
                />
              </div>

              {
              errMessage && <div className="messages mb-4">{ errMessage }</div>
              }

              {
              successMsg && <div className="messages mb-4">{ successMsg }</div>
              }

              <button type="submit" className="btn-curve btn-lit"><span>Send Message</span></button>

              
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default ContactForm