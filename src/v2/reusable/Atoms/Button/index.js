import styled from "styled-components";
import { setColor } from "v2/utils";

const Button = styled.button`
  width: 100%;
  border: ${setColor.main};
  background: ${setColor.main};
  color: ${setColor.white};
  padding: 0.8rem;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  cursor: pointer;
`;

export default Button;
