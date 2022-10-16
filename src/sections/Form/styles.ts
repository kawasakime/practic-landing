import styled from "styled-components";

export const Form = styled.div`
  position: relative;
  height: 300px;
  background: ${({theme}) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &>* {
    z-index: 2;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;

export const Background = styled.div`
  position: absolute;
  background: url('./assets/img/form_bg.png');
  background-position: center center;
  background-size: cover;
  height: 100%;
  width: 100%;
  z-index: 1;
  opacity: .1;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  color: ${({theme}) => theme.colors.secondary};
  font-weight: ${({theme}) => theme.fontWeight.light};
  margin-bottom: 15px;
  
  span {
    font-size: 18px;
    color: ${({theme}) => theme.colors.secondary}5d;
    margin-top: 4px;
  }
`

export const Inputs = styled.div`
  margin-bottom: 20px;
`
