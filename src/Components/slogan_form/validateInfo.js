export default function validateInfo(values) {
  let errors = {};

  if (!values.firstname?.trim()) {
    errors.firstname = "Your first name is required";
  }
  if (!values.lastname?.trim()) {
    errors.Lastname = "Your last name is required";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

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
