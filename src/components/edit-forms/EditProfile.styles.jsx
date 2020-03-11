import styled from "styled-components";

import { Form } from "formik";

export const StyledFormContainer = styled.div`
  margin: 0 auto;
  padding: 20vh auto 0;
  width: 50%;
  min-height: 700px;
  height: 70vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: #eaeaea;
  position: absolute;
  top: 15vh;
  right: 25%;
  background-color: rgb(61, 69, 102, 0.975);
`;

export const StyledForm = styled(Form)`
  /* min-height: 900px; */
  width: 80%;
`;
