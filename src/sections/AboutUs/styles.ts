import styled from "styled-components";
import { FlexColumnCenter } from "../../styles/components";

export const AboutUs = styled.div`
  padding: 15vh 30px;

  img {
    width: 100%;
  }

  .title {
    grid-column: 1/3;
    text-align: right;
    justify-self: right;

    @media ${({ theme }) => theme.media.lessLarge} {
      grid-column: 1/2;
      justify-self: center;
      text-align: center;
    }
  }

  .container {
    display: grid;
    grid-template-columns: auto 1fr;
    place-items: center;
  }
`;

export const AboutUsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(500px, 900px) 350px;
  grid-template-rows: auto 1fr;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  column-gap: 35px;

  @media ${({ theme }) => theme.media.lessLarge} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
  }
`;

export const Information = styled.div`
  max-width: 350px;
  @media ${({theme}) => theme.media.lessLarge} {
    max-width: none;
    margin-top: 20px;
    ${FlexColumnCenter}
  }
  p {
    text-align: justify;
    margin-bottom: 30px;
  }
`;
