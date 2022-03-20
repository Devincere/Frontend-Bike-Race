export default function validateInfo(values) {
  let errors = {};

  if (!values.firstname?.trim()) {
    errors.firstname = "First name is required";
  }

  if (!values.lastname?.trim()) {
    errors.lastname = "Last name is required";
  }
 
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.suggestion.trim()) {
    errors.suggestion = "text required";
  }

  return errors;
}
