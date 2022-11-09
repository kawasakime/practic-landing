import styled from "styled-components";

export const Footer = styled.div`
  padding: 50px;
  background: ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.media.medium} {
    padding: 50px 0;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  ul {
    @media ${({ theme }) => theme.media.medium} {
      display: none;
    }
  }

  h3 {
    color: ${({ theme }) => theme.colors.whiteText};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    @media ${({ theme }) => theme.media.medium} {
      font-size: 15px;
    }
  }
`;
