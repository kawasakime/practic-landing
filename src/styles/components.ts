import styled from "styled-components";
import { config } from "../configs/config";

const { primary, secondary } = config.colors;

function getColor(prop: boolean) {
  return prop ? primary : secondary;
}

export const Wrapper = styled.div`
  max-width: 1176px;
  width: 100%;
  padding: 0 12px;
  margin: 0 auto;
`;

export const Button = styled.a<{ primary: boolean }>`
  height: 50px;
  width: 230px;
  border-radius: 25px;
  border: 1px solid ${(props) => getColor(props.primary)};
  display: grid;
  place-items: center;
  color: ${(props) => getColor(props.primary)};
  text-decoration: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.duration};

  &:hover {
    background: ${(props) => getColor(props.primary)};
    color: ${(props) => getColor(!props.primary)};
  }
`;

export const Social = styled.ul`
  display: flex;
  list-style-type: none;
  padding-bottom: 23vh;

  li {
    margin-right: 40px;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.secondary};
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
