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
  background-color: ${setColor.mainLight};

  ${setShadow.light};
  ${setTransition()};
  &:hover {
    ${setShadow.dark};
  }
`;

export const ValueCheckBoxLabel = styled(StyledLabel)`
  /* color: ${setColor.mainColor}; */
  margin-left: 5%;
  font-size: 1em;
  text-align: right;
  align-items: center;
`;

export const StyledCheckBox = styled(StyledInput)`
  width: 25px;
`;
