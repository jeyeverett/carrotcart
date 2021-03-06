import React from 'react';

//Redux
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {
  isCartFetching,
  selectCartItemsCount,
} from '../../redux/cart/cart.selector';

import { createStructuredSelector } from 'reselect';

import {
  CartIconContainer,
  ShoppingIconContainer,
  ShoppingCountContainer,
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIconContainer />
      <ShoppingCountContainer>{itemCount}</ShoppingCountContainer>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
  isCartFetching: isCartFetching,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
