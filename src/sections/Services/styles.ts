import styled from "styled-components";

export const Services = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  padding: 115px 0;
  color: ${({ theme }) => theme.colors.secondary};

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .img-container {
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  img {
    position: relative;
    z-index: 2;
  }
`;

export const ImageShadow = styled.div`
  position: absolute;
  width: 612px;
  height: 612px;
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
    border-bottom: 1px solid ${({theme}) => theme.colors.secondary}5d;
    margin-bottom: 20px;

    span {
      font-weight: ${({theme}) => theme.fontWeight.semiBold};
      margin-left: 10px;
    }
  }
`