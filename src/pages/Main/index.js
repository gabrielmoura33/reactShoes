/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  ProductAmount,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductAddCart,
  Quantity,
  AddToCartText,
} from './styles';

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const producs = await api.get(`/products`);
    this.setState({
      products: producs.data,
    });
  }

  handdleAddProduct = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  renderProduct = ({ item }) => {
    return (
      <Product>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>R${item.price}</ProductPrice>
        <ProductAddCart onPress={() => this.handdleAddProduct(item)}>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Main);
