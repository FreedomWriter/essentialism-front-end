import styled from "styled-components";
import { setColor, media } from "../globals/styles";

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

export const Form = styled.form`
  border-radius: 0.5em;
  padding: 1.6em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    width: 7.5rem;
    height: 3rem;
    font-size: 1.5rem;
    margin: 2rem auto;
    border-radius: 0.5rem;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid ${setColor.mainColor};
  font-size: 1.6rem;
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin: 0.5rem auto 1.5rem;

  input:active,
  :visited,
  :focus {
    outline: transparent;
  }

  input:placeholder {
    color: ${setColor.mainColor};
    font-size: 1rem;
  }
`;

export const Label = styled.label`
  color: ${setColor.mainColor};
  width: 100%;

  font-size: 1.6rem;
`;
export const FormContainer = styled.div`
  margin: 2rem auto;
  background-color: ${setColor.offWhite};
  width: 100%;
  padding: 5rem;
  ${media.medium`  
    border: 1px solid ${setColor.mainColor};
    border-radius: 0.5rem;
    width: 500px;
    height: 500px;
  `};
`;

export const FormTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  margin: 2.5rem auto;
  letter-spacing: 0.25rem;
  text-transform: capitalize;
`;
