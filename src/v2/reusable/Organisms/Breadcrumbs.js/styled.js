import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "v2/utils";

export const Container = styled.div`
  position: absolute;
  height: 32px;
  bottom: 16px;
  margin-top: auto;
  margin-bottom: auto;
  left: 16px;
`;
export const OL = styled.ol`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const LI = styled.li`
  --spacing: 8px;
  display: inline;

  &:not(:first-of-type) {
    margin-left: var(--spacing);

    &:before {
      content: "";
      display: inline-block;
      transform: rotate(15deg);
      border-right: 1px solid;
      margin-right: var(--spacing);
      height: 10px;
      opacity: 0.25;
    }
  }
`;

export const A = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: revert;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  border: solid deeppink;

  background-color: ${COLORS.primary};
  color: ${COLORS.white};
`;
