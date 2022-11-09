import styled from "styled-components";

export const Header = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  color: ${({theme}) => theme.colors.whiteText};

  @media ${({ theme }) => theme.media.large} {
    .navigation {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  max-height: 50px;
`;
