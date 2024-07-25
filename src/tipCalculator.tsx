import React from "react";
import { useState } from "react";

// Conforms the inputs to a specific structure
interface FormInput {
  bill: string;
  tip: string;
}

const TipCalculator: React.FC = () => {
  const [formInput, setFormInput] = useState<FormInput>({ bill: "", tip: "" });

  const [totalBill, setTotalBill] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 'id' refers to bill/tip element depending on which triggered the event. Value is the current value of the element
    const { id, value } = event.target;

    // This spreads everything into the new object and updates it (eg. bill/tip)
    setFormInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  const calculateTip = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const bill = parseFloat(formInput.bill);
    const tip = parseFloat(formInput.tip);

    if (bill < 0 || tip < 0) {
      setTotalBill("Please enter valid numbers");
      return;
    }

    const tipAmount = bill * (tip / 100);
    const total = bill + tipAmount;

    // This will display after the button is clicked
    setTotalBill(`Your total is $${total.toFixed(2)}`);
  };

  return (
    <>
      <div>
        <form onSubmit={calculateTip}>
          <div>
            <label htmlFor="bill">Bill amount: </label>
            <input
              type="number"
              id="bill"
              value={formInput.bill}
              min={0}
              step={0.01}
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <label htmlFor="tip">Tip percentage: </label>
            <input
              type="number"
              id="tip"
              value={formInput.tip}
              min={0}
              step={0.1}
              onChange={handleInputChange}
            ></input>
          </div>
          <button type="submit">Calculate</button>
        </form>
        {totalBill && <h2>{totalBill}</h2>}
      </div>
    </>
  );
};

export default TipCalculator;
