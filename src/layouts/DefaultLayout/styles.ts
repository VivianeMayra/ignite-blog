import styled from "styled-components"

export const LayoutContainer = styled.div`
  width: 100%;
  height: calc(100vh - 10rem);
  margin: 0;
  background: ${(props) => props.theme["colors-base-background"]};
  display: flex;
  flex-direction: column;

  @media (max-width: 780px) {
    padding: 1rem;
    width: 115%;
  }

  > main {
    width: 100%;
    max-width: 54rem;
    margin: 0 auto;
  }
`
