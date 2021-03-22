import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import AboutProjectCard from "../../components/Cards/AboutProjects";
import LoadingSpinner from "../../ui/LoadingSpinner.component";

const AboutProjectsBanner = () => {
  return (
    <div>
      <h5>
        What you do matters.
        <span>
          <span> </span>Think about the things you are spending your time and
          energy on. From work to family to friends you have demands on being
          made on your time. You may feel like saying yes to everything will get
          you the recognition you crave at work. You want to make everyone
          happy, so you say yes only to regret it later. You're working on so
          much that nothing gets done. Your year of yes has become a year of
          stress and you are ready to do something different.
        </span>{" "}
      </h5>
    </div>
  );
};

function AboutProjects() {
  const history = useHistory();
  const isLoading = useSelector((state) => state.login.isLoading);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <AboutProjectsBanner />
      <AboutProjectCard />
      <button onClick={() => history.push("/project-form")}>continue</button>
    </>
  );
}

export default AboutProjects;
