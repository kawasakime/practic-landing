import styled, { css } from "styled-components";
import { config } from "../configs/config";

export const FlexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GridCenter = css`
  display: grid;
  place-items: center;
`;

export const Wrapper = styled.div`
  max-width: 1176px;
  width: 100%;
  padding: 0 12px;
  margin: 0 auto;

  @media ${({ theme }) => theme.media.large} {
    padding: 0 30px;
  }
`;

export const Button = styled.a<{ primary: boolean }>`
  height: 50px;
  width: 230px;
  border-radius: 25px;
  border: 1px solid
    ${({ primary, theme }) => (!!primary ? theme.colors.blackText : theme.colors.whiteText)};
  display: grid;
  place-items: center;
  color: ${({ primary, theme }) => (!!primary ? theme.colors.blackText : theme.colors.whiteText)};
  text-decoration: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.duration};
  background: none;

  &:hover {
    background: ${({ primary, theme }) =>
      !!primary ? theme.colors.blackText : theme.colors.whiteText};
    color: ${({ primary, theme }) => (!!primary ? theme.colors.whiteText : theme.colors.blackText)};
  }
`;

export const SubmitButton = Button.withComponent("button");

interface LinkListProps {
  margin: string;
  primary?: boolean;
  direction?: string;
  marginBottom?: string;
}

export const LinkList = styled.ul<LinkListProps>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  list-style-type: none;

  li {
    margin: 0 ${({ margin = "23px" }) => margin};
    margin-bottom: ${({ marginBottom = "0" }) => marginBottom};

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }

    a {
      text-decoration: none;
      color: ${({ primary, theme }) =>
        !!primary ? theme.colors.blackText : theme.colors.whiteText}7d;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  white-space: pre-line;
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 270px;
  height: 50px;
  outline: none;
  background-color: ${({ theme }) => theme.colors.secondary}1d;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.whiteText};
  font-size: 15px;
  padding: 0 20px;
  margin: 0 15px;
`;
