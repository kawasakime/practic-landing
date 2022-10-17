import styled from "styled-components";
import { FlexColumnCenter } from "../../styles/components";

export const Contacts = styled.div`
  margin: 100px 0;
  position: relative;
  width: 100%;

  .wrapper {
    .map {
      position: absolute;
      top: 30px;
      left: 0;
      height: 400px;
      width: 100%;
      z-index: 2;

      @media ${({ theme }) => theme.media.lessLarge} {
        position: relative;
        top: auto;
      }
    }
  }
`;

export const ContactsContainer = styled.div`
  position: relative;
  /* height: 460px; */
  width: 460px;
  padding: 34px;
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 4px 10px ${({ theme }) => theme.colors.primary}2d;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${({ theme }) => theme.media.lessLarge} {
    width: 100%;
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
    place-items: center;
    gap: 20px;
  }
`;

export const InformationBlock = styled.div`
  margin-bottom: 40px;
  @media ${({ theme }) => theme.media.lessLarge} {
    ${FlexColumnCenter}
    text-align: center;
    margin-bottom: 15px;
  }

  .title {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    svg {
      height: 24px;
      width: 24px;
      margin-right: 5px;
    }
  }
`;
