import styled from "styled-components";
import { COLORS } from "v2/utils";

const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid ${COLORS.primary};
  font-size: ${16 / 16}rem;
  border-radius: 4px;
  padding: 8px;
  margin: 8px auto;
  color: ${COLORS.primary};

  input:active,
  :visited,
  :focus {
    outline: transparent;
  }

  input:placeholder {
    color: ${COLORS.primary};
    font-size: ${16 / 16}rem;
  }
`;

export default Input;
