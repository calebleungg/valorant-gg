import React from "react";
import { StyleSheet, View } from "react-native";

import colors from '../config/colors'
import Text from '../components/Text'

const StatsFigure = ({ width = '100%', title, stat }) => {
  return (
    <View style={[styles.box, {width: width}]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.stat}>{stat}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    stat: {
        fontSize: 20,
        fontWeight: 'bold',
    },  
    title: {
        color: colors.primary,
        fontSize: 15,
        fontWeight: "800",
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: colors.dark
    },
});

export default StatsFigure;
