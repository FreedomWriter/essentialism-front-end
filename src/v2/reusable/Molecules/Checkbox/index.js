import styled from "styled-components";
import { setColor } from "v2/utils";
import { Label } from "v2/reusable";

const CheckboxLabel = styled(Label)`
  margin-left: 1.6rem;
  font-size: 1.6rem;
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
    margin-left: 1rem;
    width: 1.6rem;
    height: 1.6rem;
    margin-top: 0.2rem;
    border: 1px solid ${setColor.main};
    border-radius: 0.4rem;
    position: relative;
    cursor: pointer;
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
    color: ${setColor.main};
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
