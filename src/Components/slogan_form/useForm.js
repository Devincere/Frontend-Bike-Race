import { useState, useEffect } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    suggestion: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (Object.keys(validate(values)).length > 0) {
      setErrors(validate(values));
    } else {
      return true;
    }

    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      //callback();
    }
  }, [errors, isSubmitting]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
