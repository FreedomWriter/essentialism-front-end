import styled from "styled-components";
import { media } from "v2/utils";
import { Dialog } from "@reach/dialog";

export const Container = styled(Dialog)`
  min-width: 500px;
  ${media.small`
  width: 100vw;
  margin: 0 auto;

  form {
    padding: 0;
    margin: 0;
  }
`}
`;
