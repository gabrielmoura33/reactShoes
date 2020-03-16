import styled from 'styled-components/native';
import { darken } from 'polished';
import { RectButton } from 'react-native-gesture-handler';
import global from '../../styles/global';

export const Container = styled.View`
  background: ${global.dark};
`;

export const Product = styled.View`
  justify-content: center;
  background: #fff;
  padding: 15px;
  margin: 15px;
  border-radius: 8px;
  width: 220px;
  height: 350px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  margin-top: 7px;
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 5px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const ProductAddCart = styled(RectButton)`
  background: ${global.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, global.primary)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const Quantity = styled.Text`
  margin-left: 14px;
  font-size: 14px;
  color: #fff;
`;

export const AddToCartText = styled.Text`
  margin: auto;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
