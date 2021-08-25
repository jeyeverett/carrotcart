import React from 'react';

import { HomePageContainer } from './homepage.styles';
import { StyledH1, StyledList } from '../../generalstyles';

import Directory from '../../components/directory/directory.component.jsx';

const HomePage = () => {
  return (
    <HomePageContainer>
      <StyledH1>
        Sustainably grown local produce - and other natural stuff!
      </StyledH1>
      <StyledList>
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
      </StyledList>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
