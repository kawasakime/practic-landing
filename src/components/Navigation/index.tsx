import React from "react";
import { config } from "../../configs/config";
import * as S from "./styles";

const Navigation = () => {
  return (
    <S.Navigation>
      {config.navigation.map((item, i) => (
        <li key={i}>
          <a href="ЗАГЛУШКА">{item}</a>
        </li>
      ))}
    </S.Navigation>
  );
};

export default Navigation;
