export default function validateInfo(values) {
  let errors = {};

  if (!values.firstName?.trim()) 
    errors.firstName = "First name is required";
  

  if (!values.lastName?.trim())
    errors.lastName = "Last name is required";
 
  if (!values.email) 
    errors.email = "Email required";
   else if (!/\S+@\S+\.\S+/.test(values.email)) 
    errors.email = "Email address is invalid";
  

  if (!values.suggestion.trim()) 
    errors.suggestion = "text required";
  
  if (values.suggestion.trim().length>50) 
    errors.suggestion = "It must contain 50 charateres or less";
  

  return errors;
}
