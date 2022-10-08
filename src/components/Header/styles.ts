import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  background: ${({theme}) => theme.colors.primary};
`

export const Logo = styled.img`
  max-height: 50px;
`