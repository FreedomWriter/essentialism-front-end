import styled from "styled-components";
import { setColor } from "v2/utils";

const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid ${setColor.main};
  font-size: 1.6rem;
  border-radius: 0.4rem;
  padding: 0.8rem;
  margin: 0.8rem auto 1.6rem;
  color: ${setColor.main};

  input:active,
  :visited,
  :focus {
    outline: transparent;
  }

  input:placeholder {
    color: ${setColor.main};
    font-size: 1.6rem;
  }
`;

export default Input;
