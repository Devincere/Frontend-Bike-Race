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
          type="firstname"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="John"
          name="firstname"
          onChange={handleChange}
        />
        {errors.firstname && !isSubmitted && (
          <p className="form-error">{errors.firstname}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Last Name
        </label>
        <input
          type="lastname"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Smith"
          name="lastname"
          onChange={handleChange}
        />
        {errors.lastname && !isSubmitted && (
          <p className="form-error">{errors.lastname}</p>
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
          className="form-control"
          id="suggestion"
          rows="3"
          name="suggestion"
          onChange={handleChange}
        ></textarea>
        {errors.text && !isSubmitted && (
          <p className="form-error">{errors.text}</p>
        )}
      </div>
      <div className="col-12 text-center">
        <button className="btn btn-primary" type="submit">
          Submit form
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
