import React from "react";

import { StyledTitle, HomePageContainer, Veg } from "./homepage.styles";

import Directory from "../../components/directory/directory.component.jsx";

const HomePage = () => {
  return (
    <HomePageContainer>
      <StyledTitle>
        Sustainably grown local produce - and other natural stuff!
      </StyledTitle>
      {/* <StyledList>
        <li>Welcome to the home of your freshest locally grown produce!</li>
      </StyledList>
      <StyledList>
        <li>
          Browse our selection and place your order - no sign up required!
        </li>
        <li>
          <small>
            Create an account to see your past orders and get access to
            exclusive offers
          </small>
        </li>
      </StyledList> */}
      <Directory />
      <Veg />
      {/* <Directory /> */}
    </HomePageContainer>
  );
};

export default HomePage;
