import styled from "styled-components";

import { Form } from "formik";

export const StyledFormContainer = styled.div`
  margin: 5% auto 0;
  width: 50%;
  min-height: 575px;
  height: 575px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: rgb(61, 69, 102, 0.975);
`;

export const StyledForm = styled(Form)`
  padding-top: 5%;
  width: 80%;
`;
