import React from "react";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { config } from "../../configs/config";

import * as S from "./styles";
import * as C from "../../styles/components";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import Social from "../../components/Social";

const Contacts: React.FC = () => {
  const center = config.contacts.coordinates;

  return (
    <YMaps>
      <S.Contacts id="section-6">
        <C.Wrapper className="wrapper">
          <S.ContactsContainer>
            <S.InformationBlock>
              <div className="title">
                <HiOutlineLocationMarker />
                <span>Адрес</span>
              </div>
              <p>
                {config.information.address}
                <br />
                {config.contacts.time}
              </p>
            </S.InformationBlock>
            <S.InformationBlock>
              <div className="title">
                <AiOutlinePhone />
                <span>Телефон</span>
              </div>
              <p>{config.information.phone}</p>
            </S.InformationBlock>
            <S.InformationBlock>
              <div className="title">
                <AiOutlineMail />
                <span>Почта</span>
              </div>
              <p>{config.information.email}</p>
            </S.InformationBlock>
            <Social items={config.social} primary />
          </S.ContactsContainer>
          <Map className="map" defaultState={{ center: center, zoom: 16 }}>
            <Placemark
              key={""}
              geometry={center}
              options={{
                iconLayout: "default#image",
                iconImageSize: [44, 50],
              }}
            />
          </Map>
        </C.Wrapper>
      </S.Contacts>
    </YMaps>
  );
};

export default Contacts;
