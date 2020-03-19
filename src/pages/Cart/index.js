/* eslint-disable react/prop-types */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
} from './styles';
import globals from '../../styles/global';
import * as CartActions from '../../store/modules/cart/actions';

function Cart({ cart, removeFromCart, updateAmount }) {
  function increment(product) {
    return updateAmount(product.id, product.amount + 1);
  }
  function decrement(product) {
    return updateAmount(product.id, product.amount - 1);
  }
  return (
    <Container>
      <Products>
        {cart.map(product => (
          <Product key={String(product.id)}>
            <ProductInfo>
              <ProductImage source={{ uri: product.image }} />
              <ProductDetails>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>R${product.price}</ProductPrice>
              </ProductDetails>
              <ProductDelete>
                <Icon
                  name="delete-forever"
                  size={24}
                  color={globals.primary}
                  onPress={() => removeFromCart(product.id)}
                />
              </ProductDelete>
            </ProductInfo>
            <ProductControls>
              <ProductControlButton onPress={() => decrement(product)}>
                <Icon
                  name="remove-circle-outline"
                  size={20}
                  color={globals.primary}
                />
              </ProductControlButton>
              <ProductAmount>{product.amount}</ProductAmount>
              <ProductControlButton onPress={() => increment(product)}>
                <Icon
                  name="add-circle-outline"
                  size={20}
                  color={globals.primary}
                />
              </ProductControlButton>
              <ProductSubtotal>R$4000,00</ProductSubtotal>
            </ProductControls>
          </Product>
        ))}
      </Products>
      <TotalContainer>
        <TotalText>TOTAL</TotalText>
        <TotalAmount>R$2000000,00</TotalAmount>
        <Order>
          <OrderText>FINALIZAR PEDIDO</OrderText>
        </Order>
      </TotalContainer>
    </Container>
  );
}
const mapStateToProps = state => ({
  cart: state.cart,
  emptyCart: state.cart.length > 0,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
