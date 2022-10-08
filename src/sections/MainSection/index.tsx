import React from "react";
import Header from "../../components/Header";

import * as C from "../../styles/components";
import * as S from "./styles";

import { config } from "../../configs/config";
import Social from "../../components/Social";
import Button from "../../components/UI/Button";

const MainSection: React.FC = () => {
  return (
    <S.MainSection>
      <S.Image src="./assets/img/main.png" />
      <C.Wrapper>
        <S.MainSectionContainer>
          <Header phone={config.information.phone} />
          <S.Information>
            <h1>
              {config.mainSection.title.primary}
              <br />
              <span>{config.mainSection.title.secondary}</span>
            </h1>
            <p>{config.mainSection.description}</p>
            <Button primary={false}>{config.mainSection.btnText}</Button>
          </S.Information>
          <Social items={config.social}/>
        </S.MainSectionContainer>
      </C.Wrapper>
    </S.MainSection>
  );
};

export default MainSection;
