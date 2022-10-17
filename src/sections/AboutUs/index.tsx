import React from "react";

import * as C from "../../styles/components";
import * as S from "./styles";

import { config } from "../../configs/config";

const AboutUs: React.FC = () => {
  return (
    <S.AboutUs id="section-2">
      <S.AboutUsContainer>
        <C.Title className="title">{config.aboutUs.title}</C.Title>
        <img src="./assets/img/about-us.jpg" alt="" />
        <S.Information>
          <p>{config.aboutUs.description}</p>
          <C.Button primary>Забронировать</C.Button>
        </S.Information>
      </S.AboutUsContainer>
    </S.AboutUs>
  );
};

export default AboutUs;
