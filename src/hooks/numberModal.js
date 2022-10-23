import { useState } from "react";

export const NumberModal = (initialValue = 1) => {
  const[number, setNumber] = useState(initialValue);
  const changeQuestion = (newNumber) => setNumber(newNumber);
  return[ number, changeQuestion];
}