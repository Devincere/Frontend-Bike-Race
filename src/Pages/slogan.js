import axios from "axios";
import React from "react";
import Form from "../Components/slogan_form/form";

const Slogan = () => {
  const submit = async (data) => {
    const res = await axios.post(`/api/v1/forms`, data);

    console.log({ res });
  };

  return (
    <div className="slogan-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-5 text-center header-slogan">
            <h4>Want to submit your Slogan idea ?</h4>
            <h4>Please fill out the form below.</h4>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-5 form-fields">
            <Form submit={submit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
