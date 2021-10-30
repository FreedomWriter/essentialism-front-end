import styled from "styled-components";
import { COLORS } from "v2/utils";

export const Container = styled.footer`
  position: fixed;
  width: 100%;
  height: 64px;
  bottom: 0;
  margin-top: auto;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  background-color: ${COLORS.main};
  color: ${COLORS.white};
  display: flex;
  justify-content: center;
  padding: 16px;
`;
