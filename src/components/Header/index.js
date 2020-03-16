import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { Wrapper, Container, Logo, CartButton, Quantity } from './styles';

function Header({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Logo />
        </TouchableOpacity>
        <CartButton onPress={() => navigation.navigate('Cart')}>
          <Quantity>1</Quantity>
        </CartButton>
      </Container>
    </Wrapper>
  );
}
export default Header;
