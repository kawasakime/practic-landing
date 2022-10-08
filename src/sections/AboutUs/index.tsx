import React from "react";

import * as C from "../../styles/components";
import * as S from "./styles";

import { config } from "../../configs/config";

const AboutUs: React.FC = () => {
  return (
    <S.AboutUs id="section-2">
      <C.Wrapper>
        <C.Title className="title">{config.aboutUs.title}</C.Title>
        <div className="container">
          <img src="./assets/img/about-us.jpg" alt="" />
          <div className="info">
            <p>{config.aboutUs.description}</p>
            <C.Button primary>Забронировать</C.Button>
          </div>
        </div>
      </C.Wrapper>
    </S.AboutUs>
  );
};

export default AboutUs;
