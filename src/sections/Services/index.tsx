import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";

import { config } from "../../configs/config";

const Services: React.FC = () => {
  return (
    <S.Services id="section-3">
      <C.Wrapper className="wrapper">
        <S.ServicesContainer>
          <h1>{config.services.title}</h1>
          <S.ServicesList>
            {config.services.items.map((item, i) => (
              <li key={i}>
                {item.title} <span>от {item.price} ₽</span>
              </li>
            ))}
          </S.ServicesList>
        </S.ServicesContainer>
        <S.ImageContainer>
          <S.ImageShadow />
          <img src="./assets/img/services.jpg" alt="" />
        </S.ImageContainer>
      </C.Wrapper>
    </S.Services>
  );
};

export default Services;
