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
    type = "text",
    value,
  } = props;
  return (
    <>
      <Label htmlFor={id}>
        {label} {error && <Error id={`${id}Desc`}>{error}</Error>}
      </Label>
      <Input
        type={type}
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
  cursor: pointer;
`;
const CheckboxContianer = styled.div`
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
  cursor: pointer;
`;

export const Button = styled.button`
  width: 100%;
  border: ${setColor.main};
  background: ${setColor.main};
  color: ${setColor.white};
  padding: 0.8rem;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  cursor: pointer;
`;

export const Error = styled.span`
  color: ${setColor.error};
  font-size: 1.6rem;
  text-align: center;
`;

const SubmitButton = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  transition: color 250ms;
  width: 100%;
  border: ${setColor.main};
  background-color: ${setColor.main};
  color: ${setColor.white};
  padding: 0.8rem;
  border-radius: 0.4rem;
  font-size: 1.6rem;

  &:hover:not([aria-disabled="true"]) {
    opacity: 0.8;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: var(--focus-shadow);
  }

  /* [DIFF 2/2] - change selector for styles */
  &[aria-disabled="true"] {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 0.7em;
    height: 0.7em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
    border: 2px var(--btnTxt);
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-style: solid;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 250ms;
  }

  &[data-loading="true"] {
    color: transparent;
    pointer-events: none;

    &::after {
      opacity: 1;
      animation: rotate 750ms linear infinite;
    }
  }
`;

export const SROnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const A11ySubmitButton = (props) => {
  const { children, reason, isDisabled, isLoading } = props;
  return (
    <SubmitButton
      type="submit"
      aria-disabled={isDisabled}
      aria-describedby="disabledReason"
      data-loading={isLoading}
    >
      <SROnly id="disabledReason">{reason}</SROnly>
      <SROnly
        className="sr-only js-loadingMsg"
        aria-live="assertive"
        data-loading-msg="Submitting..."
      />
      {children}
    </SubmitButton>
  );
};
