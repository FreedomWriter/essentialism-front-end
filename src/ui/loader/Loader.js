import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
  return (
    <LoaderContainer>
      <Loader type="Oval" color="#3d4566" height={100} width={100} />
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default Loading;
