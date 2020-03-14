import styled from "styled-components";

import ConfirmedValues from "../../components/confirmed-values/Confirmed-Values.component";
import ProjectList from "../../components/project-list/ProjectList.component";

export const StyledSection = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`;

export const StyledConfirmedValues = styled(ConfirmedValues)`
  min-width: 45vw;
  width: 100%;
  min-height: 300px;
  margin: 5% auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledProjectList = styled(ProjectList)`
  min-width: 45vw;
  width: 100%;
  min-height: 300px;
  margin: 5% auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
