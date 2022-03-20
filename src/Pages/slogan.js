import { useState } from "react";
import axios from "axios";
import { API_ROOT } from "../service";
import Form from "../Components/slogan_form/form";

const Slogan = () => {
  const [message, setMessage] = useState({ submitted: false });

  const submit = async (data) => {
    try {
      const res = await axios.post(`${API_ROOT}/slogans`, data);
      setMessage({ submitted: true, success: true });
    } catch (error) {
      setMessage({ submitted: true, success: false });
    }
  };

  console.log({ message });

  return (
    <div className="slogan-page">
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ minHeight: 400 }}
      >
        {message.submitted && message.success ? (
          <div className="alert alert-success">
            Thank you for submitting your data.
          </div>
        ) : (
          <div className="container-fluid form-container">
            <div className="row justify-content-center">
              <div className="col-xxl-6 col-md-7 col-sm-12 form-box">
                <h4>Want to submit your Slogan idea ?</h4>
                <h4>Please fill out the form below.</h4>
                <Form submit={submit} />
                {message.submitted && !message.success && (
                  <div className="alert alert-danger text-center mt-4">
                    Something went wrong!
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slogan;
