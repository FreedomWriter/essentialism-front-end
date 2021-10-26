import styled from "styled-components";
import { setColor } from "v2/utils";
import { SROnly } from "v2/reusable";

const Button = styled.button`
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
    border: ${setColor.white};
    background-color: ${setColor.white};
    color: ${setColor.main};

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

const SubmitButton = (props) => {
  const { children, reason, isDisabled, isLoading } = props;

  return (
    <Button
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
    </Button>
  );
};

export default SubmitButton;
