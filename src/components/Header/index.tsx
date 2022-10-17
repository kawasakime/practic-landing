import React from "react";
import * as S from "./styles";
import Navigation from "../Navigation";
import BurgerBtn from "../Burger/BurgerBtn";

interface HeaderProps {
  phone: string;
}

const Header: React.FC<HeaderProps> = ({ phone }) => {
  return (
    <S.Header>
      <S.Logo src="./assets/img/logo.png" />
      <Navigation />
      {phone}
      <BurgerBtn />
    </S.Header>
  );
};

export default Header;
