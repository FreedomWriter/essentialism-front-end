import styled from "styled-components";
import { setColor } from "v2/utils";

export const Form = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
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

export const Label = styled.label`
  color: ${setColor.main};
  width: 100%;
  font-size: 1.6rem;
`;

export const InputGroup = (props) => {
  const {
    id,
    name,
    error,
    placeholder,
    onChange,
    onBlur,
    label,
    inputType = "text",
    value,
  } = props;
  return (
    <>
      <Label htmlFor={id}>
        {label} {error && <Error id={`${id}Desc`}>{error}</Error>}
      </Label>
      <Input
        type={inputType}
        name={name}
        id={id}
        value={value}
        aria-describedby={`${id}Desc`}
        placeHolder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
};

export const FormTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2.4rem;
  margin: 2.5rem auto;
  letter-spacing: 0.25rem;
  text-transform: capitalize;
`;

const CheckboxLabel = styled(Label)`
  margin-left: 1.6rem;
  font-size: 1.6rem;
  text-align: right;
  align-items: center;
`;
const CheckboxContianer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    margin-left: 1rem;
    width: 1.6rem;
    height: 1.6rem;
    margin-top: 0.2rem;
    border: 1px solid ${setColor.main};
    border-radius: 0.4rem;
    position: relative;
  }
  input[type="checkbox"]::before {
    content: "✔";
    position: absolute;
    font-size: 2.4rem;
    right: -1rem;
    top: -0.9rem;
    visibility: hidden;
  }

  input[type="checkbox"]:checked::before {
    visibility: visible;
  }

  input[type="checkbox"]:disabled {
    background: ${setColor.light};
    color: gray;
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
  color: ${setColor.main};
  font-size: 1.6rem;
`;

export const Button = styled.button`
  width: 100%;
  border: ${setColor.main};
  background: ${setColor.main};
  color: ${setColor.white};
  padding: 0.8rem;
  border-radius: 0.4rem;
  font-size: 1.6rem;
`;

export const Error = styled.span`
  color: ${setColor.error};
  font-size: 1.6rem;
  text-align: center;
`;
