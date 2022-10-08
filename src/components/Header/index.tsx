import React from "react";
import * as S from "./styles";
import Navigation from "../Navigation";

interface HeaderProps {
  phone: string;
}

const Header: React.FC<HeaderProps> = ({ phone }) => {
  return (
    <S.Header>
      <S.Logo src="./assets/img/logo.png" />
      <Navigation />
      {phone}
    </S.Header>
  );
};

export default Header;
