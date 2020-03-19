/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Wrapper, Container, Logo, CartButton, Quantity } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Wrapper>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Logo />
        </TouchableOpacity>
        <CartButton onPress={() => navigation.navigate('Cart')}>
          <Quantity>{cartSize}</Quantity>
        </CartButton>
      </Container>
    </Wrapper>
  );
}
export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
