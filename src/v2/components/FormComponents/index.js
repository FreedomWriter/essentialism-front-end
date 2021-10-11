import styled from "styled-components";
import { setColor } from "v2/utils";

export const Form = styled.form`
  padding: 0.4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid ${setColor.mainColor};
  font-size: 1.6rem;
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin: 0.5rem auto 1.5rem;
  color: ${setColor.mainColor};

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

export const FormTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  margin: 2.5rem auto;
  letter-spacing: 0.25rem;
  text-transform: capitalize;
`;

const CheckboxLabel = styled(Label)`
  margin-left: 5%;
  font-size: 1.2rem;
  text-align: right;
  align-items: center;
`;
const CheckboxContianer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  input {
    margin-left: 1rem;
    width: 1rem;
    height: 1rem;
    margin-top: 2px;
  }
`;
export const Checkbox = (props) => {
  const { label, id, name, checked, onChange, value } = props;
  return (
    <CheckboxContianer>
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        value={value}
      />
    </CheckboxContianer>
  );
};

export const TransparentButton = styled.button`
  width: 100%;
  border: transparent;
  background: transparent;
  color: ${setColor.mainColor};
  font-size: 1.2rem;
`;

export const Button = styled.button`
  width: 100%;
  border: ${setColor.mainColor};
  background: ${setColor.mainColor};
  color: ${setColor.offWhite};
  padding: 0.8rem;
  border-radius: 0.4rem;
  font-size: 1.2rem;
`;
