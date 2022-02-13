import React from "react";
import { StyleSheet, View, Image } from "react-native";

import Text from '../components/Text'
import colors from '../config/colors'


const WeaponCard = ({ width = '100%', weapon, kills, headshots} ) => {

    return (
    <View style={[styles.box, {width: width}]}>
        <Image style={styles.weapon} source={weapon} />
        <View style={styles.corner}>
            <Text style={styles.stats}>Kills: {kills}</Text>
            <Text style={styles.stats}>Headshots: {headshots}</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    weapon: {
        width: '100%',
        height: 100,
        marginVertical: 15
    },
    box: {
        alignItems: 'flex-end',
    },
    corner: {
        backgroundColor: colors.dark,
        borderRightWidth: 5,
        borderRightColor: colors.white,
        padding: 5
    },  
    stats: {
        color: colors.primary,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'right',
        paddingHorizontal: 15,
    },  
});

export default WeaponCard;
