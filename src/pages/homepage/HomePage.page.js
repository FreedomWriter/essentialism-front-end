import React from "react";
import { useSelector } from "react-redux";
import ProjectList from "../../components/ProjectList";
import ConfirmedTopValues from "../../components/UsersValues";

// import { LoaderCenter } from "../../globals/LoaderCenter";
import { setColor } from "../../ui/globals/styles";
import Loader from "react-loader-spinner";

function HomePage() {
  const projectsLoading = useSelector((state) => state.projects.isLoading);
  const userValuesLoading = useSelector((state) => state.userValues.isLoading);

  if (projectsLoading || userValuesLoading) {
    return (
      // <LoaderCenter>
      <Loader
        type="TailSpin"
        color={setColor.mainColor}
        height="100%"
        width="100%"
        timeout={3000}
      />
      // </LoaderCenter>
    );
  }

  return (
    <>
      <ConfirmedTopValues />
      <ProjectList />
    </>
  );
}

export default HomePage;
