import React from "react";
import { useState } from "react";

// Conforms the inputs to a specific structure
interface FormInput {
  bill: string;
  tip: string;
}

const tipCalculator: React.FC = () => {
  const [formInput, setFormInput] = useState<FormInput>({ bill: "", tip: "" });

  const [totalBill, setTotalBill] = useState<string | null>(null);

  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    // 'Name' refers to bill/tip element depending on which triggered the event. Value is the current value of the element 
    const { name, value } = event.target;
    
    // This spreads everything into the new object and updates it (eg. bill/tip)
    setFormInput(prevInput => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const calculateTip = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const bill = parseFloat(formInput.bill)
    const tip = parseFloat(formInput.tip)

    const tipAmount = bill * (tip / 100)
    const total = bill + tipAmount
    setTotalBill(`Your total is $${total.toFixed(2)}`)


  }
  
  return (

  )
};
