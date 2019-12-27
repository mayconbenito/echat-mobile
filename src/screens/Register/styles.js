import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: 20;
`;

export const Form = styled.View`
  width: 90%;
`;

export const Title = styled.Text`
  font-size: 34;
`;

export const Input = styled.TextInput`
  margin-vertical: 5;
  border-width: 1;
  border-color: #000;
  padding-left: 10;
`;

export const NavigationContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 10;
  padding-horizontal: 15;
  padding-vertical: 10;
  background-color: #714cc1;
  border-radius: 2;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16;
`;

export const ErrorContainer = styled.View`
  margin-top: 20;
  align-items: center;
`;

export const ErrorMessage = styled.Text`
  font-size: 16;
  color: #000;
  text-align: center;
`;