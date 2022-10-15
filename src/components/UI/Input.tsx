import React from "react";

import * as C from "../../styles/components";

interface InputProps {
  placeholder: string;
  type: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input: React.FC<InputProps> = ({ placeholder, type, handler, value }) => {
  return (
    <C.Input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={handler}
    />
  );
};

export default Input;
