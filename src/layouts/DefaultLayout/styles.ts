import styled from "styled-components"

export const LayoutContainer = styled.div`
  max-width: 89rem;
  height: calc(100vh - 10rem);
  margin: 2rem auto;
  padding: 1rem;
  background: ${(props) => props.theme["colors-base-background"]};
  display: flex;
  flex-direction: column;

  > main {
    width: 100%;
    max-width: 54rem;
    margin: 0 auto;
  }
`
