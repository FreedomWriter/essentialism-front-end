import styled from "styled-components";

import ConfirmedValues from "../../components/confirmed-values/Confirmed-Values.component";
import ProjectList from "../../components/project-list/ProjectList.component";

export const StyledSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  margin-bottom: 5vh;
`;

export const StyledConfirmedValues = styled(ConfirmedValues)`
  max-width: 30vw;
  width: 200px;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const StyledProjectList = styled(ProjectList)`
  max-width: 30vw;
  width: 200px;
  margin-top: 0;
`;
