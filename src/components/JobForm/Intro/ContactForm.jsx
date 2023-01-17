import { useState, useRef } from "react";
import axios from "axios";

const initialFormState = {
  title: "",
  firstname: "",
  lastname: "",
  email: "",
  mobilenumber: "",
  cv: "",
};

const ContactForm = (props) => {
  const [formData, setFormData] = useState(initialFormState);
  const fileInputRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [errMessages, setErrMessages] = useState([]);
  const [successMsg, setSuccessMsg] = useState(null);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "cv") {
      setFormData((prevState) => ({ ...prevState, [name]: e.target.files[0] }));

      return;
    }

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrMessages([]);
    setSuccessMsg(null);

    let fileReader;
    try {
      fileReader = new FileReader();
    } catch (err) {
      setErrMessages([
        { msg: "Something went wrong while uploading the file!" },
      ]);
    }

    try{
    fileReader.readAsBinaryString(formData.cv);
  }catch (err) {
    setErrMessages([
      { msg: "Something went wrong while uploading the file!" },
    ]);
  }

    fileReader.onerror = function () {
      setErrMessages([
        { msg: "Something went wrong while uploading the file!" },
      ]);
    };

    fileReader.onload = function () {
      const cv = fileReader.result;
      // btoa(cv)

      axios
        .post("/api/application", { ...formData, cv: btoa(cv) })
        .then((res) => {
          setFormData(initialFormState);
          setSuccessMsg(res.data.msg);
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response.data.errors);

          setErrMessages(
            err.response.data.errors || [{ msg: "Something went wrong!" }]
          );
        })
        .finally(() => {
          fileInputRef.current.value = "";
          setIsLoading(false);
        });
    };
  };

  return (
    <div className="container justify-content-center">
      <div className="row justify-content-center">
        <div className="col-sm-12 justify-content-center">
          <h3 className="text-center mb-4">Application</h3>
        </div>

        <div className="col-md-8">
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            noValidate
          >
            <div className="form-group dropdown mb-4">
              <span className="mb-4">Job Title</span>
              <br />
              <select
                name="title"
                value={formData.title}
                onChange={inputChangeHandler}
                className="form-control"
              >
                <option value="">Choose an option...</option>
                <option value="SOC Engineer">SOC Engineer</option>
                <option value="Senior Information Security Engineer">
                  Senior Information Security Engineer
                </option>
                <option value="Identity Access Management Analyst">
                  Identity Access Management Analyst
                </option>
                <option value="Cloud Security Engineer">
                  Cloud Security Engineer
                </option>
                <option value="OT Cyber Security Practitioner">
                  OT Cyber Security Practitioner
                </option>
                <option value="Cyber Security Incident Response Analyst">
                  Cyber Security Incident Response Analyst
                </option>
                <option value="Cyber Risk Consultant BCM">
                  Cyber Risk Consultant BCM
                </option>
                <option value="Cyber Security Analyst">
                  Cyber Security Analyst
                </option>
              </select>
            </div>

            <div className="form-group mb-4">
              <span className="mb-4">First Name</span>
              <input
                className="form-control"
                type="text"
                placeholder="Firstname"
                required="required"
                name="firstname"
                value={formData.firstname}
                onChange={inputChangeHandler}
              />
            </div>

            <div className="form-group mb-4">
              <span className="mb-4">Last Name</span>
              <input
                className="form-control"
                type="text"
                placeholder="Lastname"
                required="required"
                name="lastname"
                value={formData.lastname}
                onChange={inputChangeHandler}
              />
            </div>

            <div className="form-group mb-4">
              <span className="mb-4">Email</span>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
                required="required"
                value={formData.email}
                onChange={inputChangeHandler}
              />
            </div>

            <div className="form-group mb-4">
              <span className="mb-4">Telephone Number</span>
              <input
                className="form-control"
                type="text"
                placeholder="Mobile number"
                required="required"
                name="mobilenumber"
                value={formData.mobilenumber}
                onChange={inputChangeHandler}
              />
            </div>

            <span className="mb-3 mr-2">
              Curriculum Vitae (PDF smaller than 4MB)
            </span>
            <div className="form-group mb-4 upload-btn">
              <input
                ref={fileInputRef}
                type="file"
                id="myFile"
                className="form-control"
                name="cv"
                accept="application/pdf,application/vnd.ms-excel"
                // value={formData.cv}
                onChange={inputChangeHandler}
              />
            </div>

            <div className="form-group text-center">
              
            
              {
                <>
                  {errMessages.map((el, idx) => {
                    return (
                      <div
                        key={"error" + idx}
                        class="alert alert-danger d-flex align-items-center"
                        role="alert"
                      >
                        <div>{el.msg}</div>
                      </div>
                    );
                  })}
                </>
              }
            

             {/* {errMessages && <div className="messages mb-4">{errMessages}</div>} */}

              {successMsg && (
                <div
                  class="alert alert-success d-flex align-items-center"
                  role="alert"
                >
                  <div>{successMsg}</div>
                </div>
              )}

              <button
                disabled={isLoading}
                className="btn btn-primary application-button"
                type="submit"
              >
                Send Application
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
