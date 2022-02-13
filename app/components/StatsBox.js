import React from "react";
import { StyleSheet, View } from "react-native";

import colors from '../config/colors'
import Text from '../components/Text'

const StatsBox = ({ width = '100%', title, stat }) => {
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
    },
    stat: {
        fontSize: 30,
        fontWeight: 'bold',
    },  
    title: {
        color: colors.dark,
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: colors.primary
    },
});

export default StatsBox;
