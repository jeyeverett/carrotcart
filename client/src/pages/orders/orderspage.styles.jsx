import styled from 'styled-components';

export const OrderPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
  @media screen and (max-width: 700px) {
    padding: 10px;
  }
`;

export const NoOrders = styled.div`
  display: flex;
  height: 50vh;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
`;
