import React from "react";
import { StyleSheet, View, Image } from "react-native";

import colors from '../config/colors'
import avatars from '../config/avatars'
import Text from '../components/Text'



const AgentCard = ({ width = '100%', agent = 'jett', kills} ) => {

    return (
    <View style={[styles.box, {width: width}]}>
        <Image style={styles.avatar} source={avatars[agent]} />
        <Text style={styles.kills}>Total Kills:</Text>
        <Text style={styles.kills}>{kills}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderColor: colors.primary,
        borderWidth: 2,
        marginBottom: 10,
    },
    box: {
        alignItems: 'center'
    },
    kills: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
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

export default AgentCard;
