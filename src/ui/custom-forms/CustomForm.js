import styled from "styled-components";

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
