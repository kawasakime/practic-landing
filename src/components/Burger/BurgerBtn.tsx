import React from "react";
import { BurgerContext } from "../../App";

import * as S from "./styles";

const BurgerBtn: React.FC = () => {
  const { burgerIsOpen, setBurgerIsOpen } = React.useContext(BurgerContext);

  return (
    <S.BurgerBtn
      className={burgerIsOpen ? "active" : undefined}
      onClick={() => setBurgerIsOpen((prev) => !prev)}
      isActive={burgerIsOpen}
    >
      <span></span>
    </S.BurgerBtn>
  );
};

export default BurgerBtn;
