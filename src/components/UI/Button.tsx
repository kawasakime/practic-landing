import React from "react";

import * as C from "../../styles/components";

interface ButtonProps {
  children: React.ReactNode;
  primary: boolean;
}

const Button: React.FC<ButtonProps> = ({ primary, children }) => {
  return <C.Button primary={primary}>{children}</C.Button>;
};

export default Button;
