/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getZen } from "../../store/actions/zen.quotes.actions";

import { SignUpButtonContainer } from "../../components/sign-up-form/SignUpForm.styles";
import styled from "styled-components";
import {
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
  media,
  fadeIn,
} from "../../ui/globals/styles";
import { CustomButton } from "../../ui/custom-button/CustomButton";

const Banner = ({ className, quote, getZen }) => {
  useEffect(() => {
    getZen();
  }, [getZen]);
// Open the modal


// // Get the current user:
// // Available after on('init') is invoked
// const user = netlifyIdentity.currentUser();

// // Bind to events
netlifyIdentity.on('init', user => console.log('init', user));
netlifyIdentity.on('login', user => console.log('login', user));
netlifyIdentity.on('logout', () => console.log('Logged out'));
netlifyIdentity.on('error', err => console.error('Error', err));
netlifyIdentity.on('open', () => console.log('Widget opened'));
netlifyIdentity.on('close', () => console.log('Widget closed'));

// // Unbind from events
// netlifyIdentity.off('login'); // to unbind all registered handlers
// // netlifyIdentity.off('login', handler); // to unbind a single handler

// // Close the modal
// netlifyIdentity.close();

// // Log out the user
// netlifyIdentity.logout();

// // Refresh the user's JWT
// // Call in on('login') handler to ensure token refreshed after it expires (1hr)  
// // Note: this method returns a promise.
// netlifyIdentity.refresh().then((jwt)=>console.log(jwt))

// // Change language
// netlifyIdentity.setLocale('en');
  return (
    <div className={className}>
      <SignUpButtonContainer>
        <CustomButton onClick={() => netlifyIdentity.open()}>Log In</CustomButton>
      </SignUpButtonContainer>
      <h3>
        Remember <span>{quote}</span>{" "}
      </h3>
      <div className="info"></div>
    </div>
  );
};
const BannerWrapper = styled(Banner)`
  background: ${setColor.mainLight};
  margin: 50vh auto 0;
  border-radius: 0.5em;

  text-align: center;
  justify-content: center;
  padding: 2%;
  ${setLetterSpacing(3)}
  a {
    text-decoration: none;
  }
  h3 {
    text-transform: uppercase;
    font-size: ${setRem(48)};
    span {
      text-transform: capitalize;
      color: ${setColor.offWhite};
    }
  }
  p {
    width: 85%;
    margin: 0 auto;
  }
  ${media.phone` width: 100%;`}
  ${media.tablet` width: 70vw;
    ${setBorder({ width: "6px", color: setColor.mainColor })};
    p {
      width: 75%;
    }`}

  h3 {
    ${fadeIn("100%", "-10%", "0")}
    font-size: 1.2rem;
  }
  .info {
    ${fadeIn("-100%", "10%", "0")}
  }
`;

const mapStateToProps = (state) => {
  return {
    quote: state.zen.quote,
    isLoading: state.zen.isLoading,
  };
};

export default connect(mapStateToProps, { getZen })(BannerWrapper);
