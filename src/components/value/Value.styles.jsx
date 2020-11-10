import styled from "styled-components";
import { setTransition, setShadow } from "../../globals/styles";
import { CustomButton } from "../../ui/custom-button/CustomButton";

export const ValueButton = styled(CustomButton)`
  border: transparent;
`;

export const StyledValue = styled.div`
  display: flex;
  width: 100%;
  margin: 2%;
  padding: 2%;

  ${setShadow.light};
  ${setTransition()};
  &:hover {
    ${setShadow.dark};
  }
`;

export const StyledLabel = styled.label`
  color: #3d4566;
  margin-left: 5%;
`;

export const StyledInput = styled.input`
  margin-top: 5%;
`;
