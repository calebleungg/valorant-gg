import React from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors'

import { TouchableHighlight, StyleSheet } from 'react-native'

const CloseButton = ({onPress}) => {
	return (
		<TouchableHighlight style={styles.close} onPress={onPress}>
			<MaterialCommunityIcons
				color={colors.primary}
				name="chevron-left"
				size={35}
				style={styles.icon}
			/>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	close: {
		width: 50,
		height: 50,
		backgroundColor: colors.dark, 
		borderColor: colors.primary,
		borderWidth: 2,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center'
	},
	icon: {
		fontWeight: 'bold' 
	}
})

export default CloseButton