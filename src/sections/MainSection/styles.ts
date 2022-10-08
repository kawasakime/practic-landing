import styled from "styled-components";

export const MainSection = styled.div`
  position: relative;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const MainSectionContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 90%;
  min-height: 500px;
`;

export const Information = styled.div`
  max-width: 550px;

  h1 {
    font-size: 45px;
    margin-bottom: 6px;

    span {
      font-size: 30px;
    }
  }

  p {
    margin: 25px 0 55px 0;
    white-space: pre-line;
  }
`;
