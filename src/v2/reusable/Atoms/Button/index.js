import styled, { css } from "styled-components";
import { setColor } from "v2/utils";

const Button = styled.button`
  width: 100%;
  border: ${setColor.main};
  background-color: ${setColor.main};
  color: ${setColor.white};
  padding: 0.8rem;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  cursor: pointer;
  &:hover {
    border: ${setColor.white};
    background-color: ${setColor.white};
    color: ${setColor.main};
  }
  ${(props) =>
    props.invert &&
    css`
      border: ${setColor.white};
      background-color: ${setColor.white};
      color: ${setColor.main};

      &:hover {
        border: ${setColor.main};
        background-color: ${setColor.main};
        color: ${setColor.white};
      }
    `}
`;

export default Button;
