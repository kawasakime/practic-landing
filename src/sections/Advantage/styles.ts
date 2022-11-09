import styled from "styled-components";

export const Advantage = styled.div`
  padding: 80px 0;

  .title {
    text-align: center;
    margin-top: 0;
  }
`;

export const AdvantageItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 70px;
`;

export const AdvantageItem = styled.div`
  position: relative;
  padding: 35px 22px;
  display: grid;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.primary}20;
  border-radius: 10px;
  margin-bottom: 20px;

  h1 {
    position: absolute;
    font-size: 50px;
    left: 20px;
    top: 0;
    color: ${({ theme }) => theme.colors.additional};
    font-weight: ${({ theme }) => theme.fontWeight.black};
    margin: 0;
    transform: translateY(-50%);
  }

  p {
    font-size: 15px;
  }
`;
