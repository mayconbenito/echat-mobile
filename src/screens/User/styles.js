import { Header as RNHeader } from 'react-navigation-stack';
import styled from 'styled-components/native';

import UserImage from '~/components/UserImage';
import { colors } from '~/config/styles';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.PRIMARY};
  padding-horizontal: 10;
  height: ${RNHeader.HEIGHT};
`;

export const ImageContainer = styled.View`
  height: 200;
  background-color: ${colors.DARK_CYAN};
  justify-content: center;
  align-items: center;
`;

export const Image = styled(UserImage)`
  width: 200;
  height: 200;
`;

export const Username = styled.Text`
  color: ${colors.WHITE};
  font-weight: bold;
  font-size: 18;
  margin-top: -35;
  margin-left: 10;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 30;
  padding-horizontal: 10;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding-horizontal: 10;
  padding-vertical: 10;
  background-color: ${colors.PRIMARY};
  border-radius: 2;
  margin-right: 10;
`;

export const ButtonText = styled.Text`
  color: ${colors.WHITE};
  font-size: 18;
`;
