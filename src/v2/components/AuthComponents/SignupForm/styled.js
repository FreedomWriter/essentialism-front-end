import styled from "styled-components";
import { media } from "v2/utils/styling";

export const Container = styled.div`
  button {
    margin: 1.6rem auto;
  }
  ${media.small`
  form {
        h1 {
      margin: .8rem auto;
    }
    button {
      margin: .8rem auto;
    }
  }

  `}
`;
