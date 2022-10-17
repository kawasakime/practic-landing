import styled from "styled-components";
import { FlexColumnCenter } from "../../styles/components";

export const MainSection = styled.div`
  position: relative;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  overflow: hidden;
`;

export const MainSectionContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 23vh;
  @media ${({ theme }) => theme.media.large} {
    align-items: center;
  }
`;

export const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 90%;
  min-height: 500px;
  z-index: 1;

  @media ${({ theme }) => theme.media.large} {
    opacity: 0.1;
    right: 50%;
    transform: translateX(50%);
  }
`;

export const Information = styled.div`
  max-width: 550px;
  z-index: 4;
  @media ${({ theme }) => theme.media.large} {
    text-align: center;
    ${FlexColumnCenter}
  }
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
