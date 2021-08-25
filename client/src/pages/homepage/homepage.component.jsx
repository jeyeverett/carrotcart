import React from 'react';

import { HomePageContainer, HomePageBackgroundImage } from './homepage.styles';
import { StyledH1, StyledList } from '../../generalstyles';

import Directory from '../../components/directory/directory.component.jsx';

const HomePage = () => {
  return (
    <HomePageContainer>
      <HomePageBackgroundImage>
        <StyledH1
          style={
            window.innerWidth > 600
              ? { marginBottom: '100px' }
              : { marginBottom: '50px', fontSize: '18px' }
          }
        >
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
      </HomePageBackgroundImage>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
