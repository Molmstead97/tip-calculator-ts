import React from "react";
import { useState } from "react";

interface FormInput {
  bill: number | string;
  tip: number | string;
}

const tipCalculator: React.FC = () => {
  const [formInput, setFormInput] = useState<FormInput>({ bill: "", tip: "" });

  const [totalBill, setTotalBill] = useState<number | null>(null);

  return (
    
  )
};
