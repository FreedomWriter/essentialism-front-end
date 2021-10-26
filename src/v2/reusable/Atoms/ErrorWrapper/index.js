import styled from "styled-components";
import { setColor } from "v2/utils";

const ErrorWrapper = styled.span`
  color: ${setColor.error};
  font-size: 1.6rem;
  text-align: center;
`;

export default ErrorWrapper;
