import React from "react";
import { useSelector } from "react-redux";
import ProjectList from "../../components/ProjectList";
import ConfirmedTopValues from "../../components/UserValues";

import Loader from "react-loader-spinner";

function HomePage() {
  const projectsLoading = useSelector((state) => state.projects.isLoading);
  const userValuesLoading = useSelector((state) => state.userValues.isLoading);

  if (projectsLoading || userValuesLoading) {
    return <Loader type="TailSpin" height="100%" width="100%" timeout={3000} />;
  }

  return (
    <>
      <ConfirmedTopValues />
      <ProjectList />
    </>
  );
}

export default HomePage;
