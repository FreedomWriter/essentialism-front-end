
import React from "react";
import { useSelector } from "react-redux";


import Hero, { BottomImg } from "../../components/hero/Hero.component";
import hero from "../../images/hero.JPG";
import stones from "../../images/stones.jpeg";
import Banner from "../../components/banner/Banner.component";
import LoadingSpinner from "../../ui/LoadingSpinner.component";

import { Container } from "./styled";

function SignInAndUpPage() {
  const isLoading = useSelector((state) => state.login.isLoading);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      <Hero img={hero}>
            <Banner />
      </Hero>
      <BottomImg img={stones} />
    </Container>
  );
}

export default SignInAndUpPage;
