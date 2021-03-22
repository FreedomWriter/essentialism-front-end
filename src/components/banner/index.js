import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getZen } from "../../store/actions/zen.quotes.actions";

const Banner = ({ quote, getZen }) => {
  useEffect(() => {
    getZen();
  }, [getZen]);

  return (
    <div>
      <div>
        <Link to="/in">Log In</Link>
        <Link to="/up">Sign Up</Link>
      </div>
      <h3>
        Remember <span>{quote}</span>{" "}
      </h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quote: state.zen.quote,
    isLoading: state.zen.isLoading,
  };
};

export default connect(mapStateToProps, { getZen })(Banner);
