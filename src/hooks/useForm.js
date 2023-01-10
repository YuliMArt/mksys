import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = (newSate = initialState) => {
    setValues(newSate);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };
  const setFormValue = (form) => {
    setValues(form);
  };
  return [values, handleInputChange, reset, setFormValue];
};
