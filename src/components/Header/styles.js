import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import global from '../../styles/global';
import logo from '../../assets/images/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  background: ${global.dark};
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({ source: logo })`
  width: 185px;
  height: 24px;
`;

export const CartButton = styled(RectButton)`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 15px;
  margin-left: 10px;
  padding: 0 12px;
`;

export const Quantity = styled.Text`
  color: #fff;
  font-size: 16px;
`;
