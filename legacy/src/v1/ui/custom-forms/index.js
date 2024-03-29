import styled from "styled-components";
import { setColor } from "../globals/styles";

export const Form = styled.form`
  padding: 8%;
  margin: 0 auto;
  width: 50vw;
  min-height: 700px;
  height: 60vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: ${setColor.white};
  background-color: rgb(61, 69, 102, 0.975);
  border-radius: 0.5em;
`;

export const StyledInput = styled.input`
  background-color: rgb(107, 121, 179, 0.4);
  padding: 0.8rem 0.8rem 0.8rem 0.4rem;
  display: block;
  width: 100%;
  min-height: 35px;
  border: transparent;
  border-bottom: 1px solid rgb(0, 0, 0, 0.9);
  font-size: 1.2rem;
  color: ${setColor.white};

  input:active,
  :visited {
    background-color: rgb(107, 121, 179, 0.4);
    padding: 0.8rem 0.8rem 0.8rem 0.4rem;
    display: block;
    width: 100%;
    border: transparent;
    border-bottom: 1px solid rgb(0, 0, 0, 0.9);
    margin: 25px 0;
  }

  input::placeholder {
    color: ${setColor.white};
    font-size: 1rem;
  }
`;

export const StyledLabel = styled.label`
  color: ${setColor.white};
  width: 100%;
  margin: 5% 0 0;
`;

export const FormContainer = styled.div;

// export const Form = styled.form`
//   border-radius: 0.5em;
//   padding: 1.6em;
// `;

export const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid ${setColor.main};
  font-size: 1.6rem;
  border-radius: 4px;
  padding: 8px;

  input:active,
  :visited,
  :focus {
    outline: transparent;
  }

  input:placeholder {
    color: ${setColor.main};
    font-size: 1rem;
  }
`;

export const Label = styled.label`
  color: ${setColor.main};
  width: 100%;
  margin-bottom: 8px;
  font-size: 1.6rem;
`;
