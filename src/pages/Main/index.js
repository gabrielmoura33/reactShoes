/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import logo from '../../assets/images/logo.png';
import api from '../../services/api';

import {
  Container,
  ProductList,
  ProductAmount,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductAddCart,
  Quantity,
  AddToCartText,
} from './styles';

export default class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const producs = await api.get(`/products`);
    this.setState({
      products: producs.data,
    });
  }

  renderProduct = ({ item }) => {
    return (
      <Product>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>R${item.price}</ProductPrice>
        <ProductAddCart>
          <ProductAmount>
            <Quantity>1</Quantity>
          </ProductAmount>
          <AddToCartText>Adicionar</AddToCartText>
        </ProductAddCart>
      </Product>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          horizontal
          keyExtractor={item => String(item.id)}
          data={products}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}
