import styled from "styled-components";

import { setColor } from "ui/globals/styles";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  font: ${setColor.mainColor};
  border: 1px solid;
  padding: 16px;

  * {
    margin: 16px;
  }
`;

export default function FakeContainer({ children }) {
  return <Div>{children}</Div>;
}
