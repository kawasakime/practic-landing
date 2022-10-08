import styled from "styled-components";

export const Navigation = styled.ul`
  display: flex;
  list-style-type: none;

  li {
    margin: 0 23px;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.secondary};
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
