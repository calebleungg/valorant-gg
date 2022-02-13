import { StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import React from 'react';
import AppNavigator from './app/navigation/AppNavigation'

export default function App() {
	return (
		<>
			<StatusBar barStyle="light-content" />
			<NavigationContainer>
				<AppNavigator />
			</NavigationContainer>
		</>
	)
}

