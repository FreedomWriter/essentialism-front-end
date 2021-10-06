// import React from "react";
// import styled from "styled-components";
// import Loader from "react-loader-spinner";
// import { setColor } from "../../ui/globals/styles";

// export default function LoadingSpinner() {
//   return (
//     <SpinnerContainer>
//       <Loader
//         type="TailSpin"
//         color={setColor.mainColor}
//         height="100%"
//         width="100%"
//         timeout={30000} //3 secs
//       />
//     </SpinnerContainer>
//   );
// }
import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  margin: 15% auto;
`;

export default function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <Loader type="Oval" color="#3d4566" height={100} width={100} />
    </SpinnerContainer>
  );
}
