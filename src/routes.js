import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import AuthHandler from '~/screens/AuthHandler';
import Chat from '~/screens/Chat';
import Chats from '~/screens/Chats';
import Contacts from '~/screens/Contacts';
import Login from '~/screens/Login';
import Register from '~/screens/Register';
import Search from '~/screens/Search';
import User from '~/screens/User';

const HomeStack = createMaterialTopTabNavigator(
  {
    Chats: {
      screen: Chats,
      navigationOptions: {
        title: 'Conversas',
      },
    },
    Contacts: {
      screen: Contacts,
      navigationOptions: {
        title: 'Contatos',
      },
    },
  },
  {
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        backgroundColor: '#714CC1',
      },
      indicatorStyle: {
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
      },
    },
  }
);

const AppStack = createStackNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      title: 'EasyTalk',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#714CC1',
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
    },
  },
  Search,
  Chat,
  User,
});

const AuthStack = createStackNavigator(
  {
    Login,
    Register,
  },
  {
    initialRouteName: 'Login',
  }
);

const MainStack = createSwitchNavigator(
  { AppStack, AuthStack, AuthHandler },
  {
    initialRouteName: 'AuthHandler',
  }
);

export default createAppContainer(MainStack);
