import styled from "styled-components";
import { setColor } from "v2/utils";

const TransparentButton = styled.button`
  width: 100%;
  border: transparent;
  background: transparent;
  color: ${setColor.main};
  font-size: 1.6rem;
  cursor: pointer;
`;

export default TransparentButton;
