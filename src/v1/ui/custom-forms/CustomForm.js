import styled from "styled-components";
import { setColor, media } from "../globals/styles";

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
  color: ${setColor.offWhite};
  background-color: rgb(61, 69, 102, 0.975);
  border-radius: 0.5em;

  ${media.phone`
    width: 100%;
  `}
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
  color: ${setColor.offWhite};

  input:active,
  :visited {
    background-color: rgb(107, 121, 179, 0.4);
    padding: 0.8rem 0.8rem 0.8rem 0.4rem;
    display: block;
    width: 100%;
    border: transparent;
    outline: transparent;
    border-bottom: 1px solid rgb(0, 0, 0, 0.9);
    margin: 25px 0;
  }

  input::placeholder {
    color: ${setColor.offWhite};
    font-size: 1rem;
  }
`;

export const StyledLabel = styled.label`
  color: ${setColor.offWhite};
  width: 100%;
  margin: 5% 0 0;
`;

export const FormContainer = styled.div;
