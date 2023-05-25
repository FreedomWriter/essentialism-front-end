import styled from "styled-components";
import { COLORS } from "@utils";

const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid ${COLORS.primary};
  font-size: ${16 / 16}rem;
  border-radius: ${4 / 16}rem;
  padding: ${8 / 16}rem;
  margin: ${8 / 16}rem auto ${16 / 16}rem;
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
