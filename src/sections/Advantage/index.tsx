import React from "react";

import * as C from "../../styles/components";
import * as S from "./styles";

import { config } from "../../configs/config";

const Advantage = () => {
  return (
    <S.Advantage>
      <C.Wrapper>
        <C.Title className="title">{config.advantage.title}</C.Title>
        <S.AdvantageItems>
          {config.advantage.items.map((item, i) => (
            <S.AdvantageItem key={i}>
              <h1>0{i+1}</h1>
              <p>{item}</p>
            </S.AdvantageItem>
          ))}
        </S.AdvantageItems>
      </C.Wrapper>
    </S.Advantage>
  );
};

export default Advantage;
