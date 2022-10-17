import styled from "styled-components";
import { GridCenter } from "../../styles/components";

export const Services = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  padding: 115px 0;
  color: ${({ theme }) => theme.colors.secondary};

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${({ theme }) => theme.media.large} {
      flex-direction: column;
    }

    .img-container {
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 530px;
  height: 570px;
  ${GridCenter}
  @media ${({ theme }) => theme.media.lessLarge} {
    margin-top: 30px;
  }

  @media ${({ theme }) => theme.media.small} {
    height: auto;
    width: 100%;
  }

  img {
    position: relative;
    z-index: 2;
    height: 100%;
    width: 100%;
    @media ${({ theme }) => theme.media.large} {
      width: 80%;
      height: auto;
    }
    @media ${({ theme }) => theme.media.lessLarge} {
      width: 100%;
    }
  }
`;

export const ImageShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  background: radial-gradient(
    50% 50% at 50% 50%,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 100%
  );
  filter: blur(50px);
  @media ${({ theme }) => theme.media.large} {
    width: 80%;
    height: 80%;
  }
`;

export const ServicesContainer = styled.div`
  max-width: 500px;
  width: 100%;
  h1 {
    position: relative;
    font-size: 23px;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    margin-bottom: 70px;

    &::after {
      content: "";
      position: absolute;
      width: 15vw;
      height: 1px;
      background: ${({ theme }) => theme.colors.secondary};
      left: 0;
      bottom: -10px;
    }
  }
`;

export const ServicesList = styled.ul`
  list-style-type: none;
  width: 100%;

  li {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary}5d;
    margin-bottom: 20px;

    span {
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      white-space: nowrap;
      margin-left: 10px;
    }
  }
`;
