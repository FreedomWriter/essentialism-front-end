import styled from "styled-components";
import {
  setTransition,
  setShadow,
  setColor,
  media,
} from "../../ui/globals/styles";
import { StyledLabel, StyledInput } from "../../ui/custom-forms/CustomForm";

export const ValueContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 25%;
  margin: 0 2% 5%;
  padding: 1%;
  border: 1px solid ${setColor.light};
  border-radius: 0.5em;
  background-color: ${setColor.light};

  ${setShadow.light};
  ${setTransition()};
  &:hover {
    ${setShadow.dark};
  }

  ${media.phone` 
  flex-flow: column nowrap;
  width: 100%;
  margin: 5% auto;
  text-align: center;
    `}
`;

export const ValueCheckBoxLabel = styled(StyledLabel)`
  margin-left: 5%;
  font-size: 1.2em;
  text-align: right;
  align-items: center;

  ${media.phone` 
  text-align: right;
  padding-right: 7.5%;
    `}
`;

export const StyledCheckBox = styled(StyledInput)`
  width: 25px;
`;
