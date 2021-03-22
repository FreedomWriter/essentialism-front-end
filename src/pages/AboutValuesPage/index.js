import React from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import AboutValuesCard from "../../components/Cards/AboutValues";

import { getUser } from "../../store/actions/user.actions";
import LoadingSpinner from "../../ui/LoadingSpinner.component";

const AboutValuesBanner = ({ className }) => {
  return (
    <div className={className}>
      <h5>
        Enter Essentialism.
        <span>
          in a world with everything shouting for your attention, the
          disciplined pursuit of less has never been more needed. The Way of the
          Essentialist involves doing less, but better, so you can make the
          highest possible contribution. It’s not about getting more done in
          less time or getting less done. It’s about getting only the right
          things done. It’s about regaining control of our own choices about
          where to spend our time and energies instead of giving others implicit
          permission to choose for us. The first step to essentialism is
          identifying your values.
        </span>{" "}
      </h5>
    </div>
  );
};

function About() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.login.user);
  dispatch(getUser(user.id));

  const isLoading = useSelector((state) => state.login.isLoading);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <AboutValuesBanner />
      <AboutValuesCard />
      <button onClick={() => history.push("/enter-values")}>begin</button>
    </>
  );
}

export default About;
