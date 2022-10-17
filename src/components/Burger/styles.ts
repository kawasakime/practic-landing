import styled, { css } from "styled-components";
import { GridCenter } from "../../styles/components";

const burgerLine = css`
  height: 3px;
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 2px;
  transition: ${({ theme }) => theme.duration};
  left: 0;
`;

const afterBefore = css`
  content: "";
  position: absolute;
  ${burgerLine}
`;

export const BurgerBtn = styled.div<{ isActive: boolean }>`
  position: relative;
  display: none;
  height: 25px;
  width: 35px;
  cursor: pointer;
  transition: ${({ theme }) => theme.duration};
  z-index: 21;

  &:hover {
    opacity: 0.8;
  }

  @media ${({ theme }) => theme.media.large} {
    ${GridCenter}
  }

  span {
    ${burgerLine}
    width: ${(props) => (props.isActive ? "0px" : "100%")};

    &::after {
      ${afterBefore}
      top: ${({ isActive }) => (isActive ? "auto" : "0")};
      transform: rotate(${({ isActive }) => (isActive ? "45deg" : "0deg")});
    }

    &::before {
      ${afterBefore}
      bottom: ${({ isActive }) => (isActive ? "auto" : "0")};
      transform: rotate(${({ isActive }) => (isActive ? "-45deg" : "0deg")});
    }
  }
`;

export const BurgerPanel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  z-index: 20;
  padding: 80px 50px;
  font-size: 20px;
`;
