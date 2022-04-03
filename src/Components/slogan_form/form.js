import React from "react";
import { useState } from "react";

import useForm from "./useForm";
import validate from "./validateInfo";

const Form = ({ submit }) => {
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { handleChange, handleSubmit, values, errors } = useForm(validate);

  const onSubmit = async (e) => {
    console.log(" submitting..");
    e.preventDefault();

    if (handleSubmit()) {
      submit(values);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          First Name
        </label>
        <input
          type="firstName"
          className={`form-control ${errors.firstName && "is-invalid"}`}
          id="exampleFormControlInput1"
          placeholder="John"
          name="firstName"
          onChange={handleChange}
        />
        {errors.firstName && !isSubmitted && (
          <p className="invalid-feedback">{errors.firstName}</p>
          )}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Last Name
        </label>
        <input
          type="lastName"
          className={`form-control ${errors.lastName && "is-invalid"}`}
          id="exampleFormControlInput1"
          placeholder="Smith"
          name="lastName"
          onChange={handleChange}
        />
        {errors.lastName && !isSubmitted && (
          <p className="invalid-feedback">{errors.lastName}</p>
          )}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className={`form-control ${errors.email && "is-invalid"}`}
          id="exampleFormControlInput1"
          name="email"
          onChange={handleChange}
          placeholder="name@example.com"
        />
        {errors.email && !isSubmitted && (
          <p className="invalid-feedback">{errors.email}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="suggestion" className="form-label">
          Slogan
        </label>
        <textarea
          type="text"
          className={`form-control ${errors.suggestion && "is-invalid"}`}
          id="suggestion"
          rows="3"
          name="suggestion"
          onChange={handleChange}
        ></textarea>
        {errors.suggestion && !isSubmitted && (
          <p className="invalid-feedback">{errors.suggestion}</p>
          )}
      </div>
      <div className="col-12 text-center btn-submit-form">
        <button className="btn btn-primary" type="submit">
          Send Slogan
        </button>
        {!error && isSubmitted && (
          <div className="row justify-content-center">
            <div className="col text-center">
              <div className="alert alert-success">
                We have received your message!
              </div>
            </div>
          </div>
        )}
        {error && isSubmitted && (
          <div className="row justify-content-center">
            <div className="col text-center">
              <div className="alert alert-danger">
                Sorry, something went wrong!
              </div>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default Form;
