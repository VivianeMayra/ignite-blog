import styled from "styled-components"
import logo from "../../assets/logo.svg"

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background: ${logo} no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-bottom: 7rem;
  }
`
