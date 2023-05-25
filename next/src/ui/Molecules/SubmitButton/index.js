import styled from "styled-components";
import { COLORS } from "@utils";
import { VisuallyHidden } from "@ui";

const Button = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  transition: color 250ms;
  width: 100%;
  border: ${COLORS.primary};
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  padding: 0.8rem;
  border-radius: 0.4rem;
  font-size: 1.6rem;

  &:hover:not([aria-disabled="true"]) {
    border: ${COLORS.white};
    background-color: ${COLORS.white};
    color: ${COLORS.primary};
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
      <VisuallyHidden id="disabledReason">{reason}</VisuallyHidden>
      <VisuallyHidden
        className="sr-only js-loadingMsg"
        aria-live="assertive"
        data-loading-msg="Submitting..."
      />
      {children}
    </Button>
  );
};

export default SubmitButton;
