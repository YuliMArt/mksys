import React, { useState } from "react";

export const useCheck = (initialState = {}) => {
  const [check, setCheck] = useState(initialState);

  const handleCkeckChange = (e) => {
    const { checked } = e.target;
    setCheck({ ...check, [e.target.name]: checked });
  };
  const setFormCheck = (form) => {
    setCheck(form);
  };
  return [check, handleCkeckChange, setFormCheck];
};
