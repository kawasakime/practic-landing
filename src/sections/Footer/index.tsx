import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import Navigation from "../../components/Navigation";
import { config } from "../../configs/config";

const Footer = () => {
  return (
    <S.Footer>
      <C.Wrapper className="wrapper">
        <a href="/">
          <img src="./assets/img/logo.png" alt="" />
        </a>
        <Navigation direction="column" margin="0px" marginBottom="20px" />
        <h3>{config.information.phone}</h3>
      </C.Wrapper>
    </S.Footer>
  );
};

export default Footer;
