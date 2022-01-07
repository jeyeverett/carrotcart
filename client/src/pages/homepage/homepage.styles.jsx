import styled from "styled-components";
import { ReactComponent as VeggieSVG } from "../../assets/vegetables.svg";

export const HomePageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
  margin-bottom: 10px;
  @media screen and (max-width: 700px) {
    padding: 10px;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 40px;
  color: white;
  font-family: "Indie Flower", sans-serif;
  text-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    font-size: 26px;
  }
`;

export const Veg = styled(VeggieSVG)`
  height: 400px;
  width: 400px;
  @media screen and (max-width: 600px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 600px) {
    width: 250px;
    height: 250px;
  }
`;
