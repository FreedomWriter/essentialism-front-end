import styled from "styled-components";

import { CustomButton } from "../../ui/custom-button/CustomButton";

import { setColor, media } from "../../ui/globals/styles";

export const AboutButton = styled(CustomButton)`
  border: transparent;
  margin: 0 auto;
  ${media.large` 
    margin: 5% auto 2%;
    `}
`;

export const EnterValuesFormContainer = styled.form`
  display: flex;
  width: 90%;
  margin: 0 auto 2%;
  align-items: center;

  ${media.large` 
  flex-flow: column nowrap;
  width: 100%;
    `}
`;

export const StyledValueInput = styled.input`
  background-color: rgb(107, 121, 179, 0.4);
  padding: 0.8rem 0.8rem 0.8rem 0.4rem;
  display: block;
  width: 65%;
  min-height: 35px;
  border: transparent;
  border-bottom: 1px solid rgb(0, 0, 0, 0.9);
  margin: 0 auto;
  font-size: 1.2rem;
  color: ${setColor.mainColor};

  :active,
  :visited {
    background-color: rgb(107, 121, 179, 0.4);
    padding: 0.8rem 0.8rem 0.8rem 0.4rem;
    display: block;
    border: transparent;
    border-bottom: 1px solid rgb(0, 0, 0, 0.9);
  }
  ${media.large` 
    width: 90%
    `}
`;

export const StyledValueLabel = styled.label`
  font-size: 1.6rem;
  color: ${setColor.mainColor};
  width: 15%;
  text-align: center;
  ${media.large` 
  width: 90%
    `}
`;

export const CustomValuesContainter = styled.div`
  max-width: 90%;
  margin: 0 auto;
  border: 1px solid ${setColor.mainColor};
  border-radius: 0.5em;
  padding: 2%;
  display: flex;
  flex-flow: column nowrap;
`;
