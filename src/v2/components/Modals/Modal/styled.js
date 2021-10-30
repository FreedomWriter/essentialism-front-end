import styled from "styled-components";
import { media, COLORS } from "v2/utils";
import { Dialog } from "@reach/dialog";

export const Modal = styled(Dialog)`
  width: 500px;
  ${media.small`
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;

  form {
    padding: 0;
    margin: 0;
  }

`}
`;

export const CloseModal = styled.button`
  background: transparent;
  border: transparent;
  color: ${COLORS.primary};

  font-size: 1.6rem;
`;
