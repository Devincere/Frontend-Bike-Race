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
          <div className="w-100">
            <div className="row justify-content-center">
              <div className="col-5 text-center header-slogan">
                <h4>Want to submit your Slogan idea ?</h4>
                <h4>Please fill out the form below.</h4>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-5 form-fields">
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
