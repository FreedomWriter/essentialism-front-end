import styled from "styled-components";
import { setTransition, setShadow, setColor } from "../../ui/globals/styles";
import { StyledLabel, StyledInput } from "../../ui/custom-forms/CustomForm";

export const ValueContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 2%;
  padding: 2%;
  border: 1px solid ${setColor.mainLight};
  border-radius: 0.5em;

  ${setShadow.light};
  ${setTransition()};
  &:hover {
    ${setShadow.dark};
  }
`;

export const ValueCheckBoxLabel = styled(StyledLabel)`
  color: #3d4566;
  margin-left: 5%;
  font-size: 0.55em;
  text-align: right;
  align-items: center;
`;

export const StyledCheckBox = styled(StyledInput)``;
