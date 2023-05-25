import styled from "styled-components";
import { COLORS } from "@utils";
import { Label } from "@ui";

const CheckboxLabel = styled(Label)`
  margin-left: ${16 / 16}rem;
  font-size: ${16 / 16}rem;
  text-align: right;
  align-items: center;
  cursor: pointer;
`;

const CheckboxContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    margin-left: ${16 / 16}rem;
    width: ${16 / 16}rem;
    height: ${16 / 16}rem;
    margin-top: 0.2rem;
    border: 1px solid ${COLORS.primary};
    border-radius: ${4 / 16}rem;
    position: relative;
    cursor: pointer;
  }
  input[type="checkbox"]::before {
    content: "✔";
    position: absolute;
    font-size: ${24 / 16}rem;
    right: -${10 / 16}rem;
    top: -${9 / 16}rem;
    visibility: hidden;
  }

  input[type="checkbox"]:checked::before {
    visibility: visible;
  }

  input[type="checkbox"]:disabled {
    background: ${COLORS.light};
    color: ${COLORS.primary};
  }
`;

const Checkbox = (props) => {
  const { label, id, name, checked, onChange, value } = props;
  return (
    <CheckboxContainer>
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        value={value}
      />
    </CheckboxContainer>
  );
};

export default Checkbox;
