import styled from "styled-components"
import logo from "../../assets/logo.svg"

export const HeaderContainer = styled.header`
  width: 100%;
  background: ${logo} no-repeat center;
  background-color: ${(props) => props.theme["colors-base-profile"]};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-bottom: 10rem;
    margin-top: 3rem;

    @media (max-width: 900) {
      margin-bottom: 12rem;
      align-items: center;
      justify-content: center;
    }
  }
`
