import styled from 'styled-components';

export const HomePageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
  @media screen and (max-width: 700px) {
    padding: 10px;
  }
`;

export const HomePageBackgroundImage = styled.section`
  height: 75vh;
  width: 100%;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url(https://res.cloudinary.com/dnpfrwpiq/image/upload/v1630349395/carrotcart/homepage-image-1_meqgfe.jpg);
  background-position: center;
  background-size: cover;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 600px) {
    padding: 10px 20px;
  }
`;
