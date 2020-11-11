import styled from "styled-components";
import { setColor } from "../../globals/styles";

export const StyledForm = styled.form`
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
  position: absolute;
  top: 7.5vh;
  right: 25%;
  h4 {
    color: ${setColor.offWhite};
  }
`;

export const StyledInput = styled.input`
  background-color: rgb(107, 121, 179, 0.4);
  padding: 0.8rem 0.8rem 0.8rem 0.4rem;
  display: block;
  width: 100%;
  min-height: 35px;
  border: transparent;
  border-bottom: 1px solid rgb(0, 0, 0, 0.9);
  margin: 25px 0;
  font-size: 1.2rem;
  color: #eaeaea;

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
    color: #eaeaea;
  }
`;

export const StyledLabel = styled.label`
  color: ${setColor.offWhite};
`;

export const FormContainer = styled.div;
