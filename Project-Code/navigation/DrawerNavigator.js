import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer, createStackNavigator  } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';


import MenuDrawer from '../components/MenuDrawer';

const WIDTH = Dimensions.get('window').width;
const AuthStack= createStackNavigator({ Login: LoginScreen });

const DrawerConfig = {
	drawerWidth: WIDTH*0.83,
	contentComponent: ({ navigation }) => {
		return(<MenuDrawer navigation={navigation} />)
	}
}

const DrawerNavigator =  createDrawerNavigator(
	{
		Home: {
			screen: HomeScreen
		},
		About: {
			screen: AboutScreen
		},
		Settings: {
			screen: SettingsScreen
		},
		Login: {
			screen: LoginScreen
		}

	},
	DrawerConfig
);

export default createAppContainer(DrawerNavigator);