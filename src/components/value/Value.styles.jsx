import styled from "styled-components";
import { CustomButton } from "../custom-button/CustomButton";

export const ValueButton = styled(CustomButton)`
  border: none;
`;

export const ValueButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
