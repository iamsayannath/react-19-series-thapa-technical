import { useState } from "react";

export const LiftingState = () => {
  const [inputValue, setInputValue] = useState(""); //this is the state 
  return (
    <>
      <InputComponent inputV={inputValue} setInputV={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};

//child component has this state before but it send to perent component
const InputComponent = ({ inputValue, setInputValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
    </>
  );
};

// this is also a child component that get the state value from perent 
const DisplayComponent = ({ inputValue }) => {
  return <p>The current input value is: {inputValue} </p>;
};
