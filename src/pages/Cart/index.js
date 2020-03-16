import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

export default class Cart extends Component {
  state = {
    products: [],
  };

  render() {
    return (
      <Container>
        <Product>
          <ProductInfo>
            <ProductImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
              }}
            />
            <ProductDetails>
              <ProductTitle>Titulo Brabo Muito DOido</ProductTitle>
              <ProductPrice>R$129,90</ProductPrice>
            </ProductDetails>
            <ProductDelete>
              <Icon name="delete-forever" size={24} color={globals.primary} />
            </ProductDelete>
          </ProductInfo>
          <ProductControls>
            <ProductControlButton>
              <Icon
                name="remove-circle-outline"
                size={20}
                color={globals.primary}
              />
            </ProductControlButton>
            <ProductAmount />
            <ProductControlButton>
              <Icon
                name="add-circle-outline"
                size={20}
                color={globals.primary}
              />
            </ProductControlButton>
            <ProductSubtotal>R$4000,00</ProductSubtotal>
          </ProductControls>
        </Product>
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
}
