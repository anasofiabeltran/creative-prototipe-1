import { useState } from "react";

export const NumberModal = (initialValue) => {
  const[number, setNumber] = useState(initialValue);
  const changeQuestion = (newNumber) => setNumber(newNumber);
  return[ number, changeQuestion];
}