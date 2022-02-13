import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from "../screens/WelcomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

const AppNavigator = () => (
	<Stack.Navigator mode="modal" screenOptions={{headerShown: false}} >
		<Stack.Screen name="Welcome" component={WelcomeScreen} />
		<Stack.Screen name="Profile" component={ProfileScreen} />
	</Stack.Navigator>
);

export default AppNavigator;
