import React from "react";

import * as C from "../../styles/components";

interface SubmitButtonProps {
  primary: boolean;
  children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ children, primary }) => {
  return <C.SubmitButton primary={primary}>{children}</C.SubmitButton>;
};

export default SubmitButton;
