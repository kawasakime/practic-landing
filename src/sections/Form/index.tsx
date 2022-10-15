import React from "react";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import SubmitButton from "../../components/UI/SubmitButton";
import { config } from "../../configs/config";

import * as S from "./styles";

const Form = () => {
  const [nameValue, setNameValue] = React.useState("");
  const [phoneValue, setPhoneValue] = React.useState("");

  function onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setNameValue(e.target.value);
  }

  function onChangePhone(e: React.ChangeEvent<HTMLInputElement>) {
    setPhoneValue(e.target.value);
  }

  return (
    <S.Form>
      <S.Background src="./assets/img/form_bg.png" />
      <S.Title>
        {config.form.title.firstLine}
        <br />
        <span>{config.form.title.secondLine}</span>
      </S.Title>
      <form action="">
        <S.Inputs>
          <Input
            placeholder="Ваше имя"
            type="text"
            handler={onChangeName}
            value={nameValue}
          />
          <Input
            placeholder="Ваш номер"
            type="text"
            handler={onChangePhone}
            value={phoneValue}
          />
        </S.Inputs>
        <SubmitButton primary={false}>{config.form.btnText}</SubmitButton>
      </form>
    </S.Form>
  );
};

export default Form;
