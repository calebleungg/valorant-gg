import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native"

import colors from '../config/colors'
import routes from '../navigation/routes'
import badge from '../config/ranks'
import agents from '../config/agents'
import weapons from '../config/weapons'

import StatsBox from '../components/StatsBox'
import StatsFigure from '../components/StatsFigure'
import Text from '../components/Text'
import AgentCard from '../components/AgentCard'
import WeaponCard from '../components/WeaponCard'
import CloseButton from '../components/CloseButton'

const ProfileScreen = ({navigation, route}) => {

    const {
        name,
        tag,
        ranks: { competitive },
        stats: { overall: { career } }
    } = route.params

    const KDR = (career.kills / career.deaths).toFixed(2) 
    const DPR = ( career.damageStats.damage / career.roundsPlayed ).toFixed(0)
    const HS = (career.damageStats.headshots / (career.damageStats.legshots + career.damageStats.bodyshots) * 100).toFixed(2)
    
    let topAgents = []
    Object.keys(career.agentsStats).map(agent => {
        topAgents.push([agent, career.agentsStats[agent].kills])
    })
    topAgents.sort((a, b) => {
        if (a[1] < b[1]) return 1;
        if (a[1] === b[1]) return 0;
        if (a[1] > b[1]) return -1;
    })    

    let topWeapon = []
    Object.keys(career.weaponStats).map(weapon => {
        topWeapon.push({
            key: weapon,
            kills: career.weaponStats[weapon].kills
        })
    })
    topWeapon.sort((a, b) => {
        if (a.kills < b.kills) return 1;
        if (a.kills === b.kills) return 0;
        if (a.kills > b.kills) return -1;
    })
    
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.background}
                source={agents[topAgents[0][0]].background}
            >
                <View style={styles.close}>
                    <CloseButton onPress={()=>navigation.navigate(routes.WELCOME)} />
                </View>
                <View style={styles.info}>
                    <View style={styles.title}>
                        <Text style={styles.name}>
                            <Text style={[styles.name, {color: colors.primary}]}>
                                {name[0]}
                            </Text>
                            {`${name.slice(1)}#${tag}`}
                        </Text>
                        <Image style={styles.rank} source={badge[competitive.tier]} />
                    </View>
                    <View style={styles.main}>
                        <StatsBox title="KDR" stat={KDR} width="33%" />
                        <StatsBox title="DPR" stat={DPR} width="33%"/>
                        <StatsBox title="HS%" stat={HS+"%"} width="33%"/>
                    </View>
                    <View style={styles.secondary}>
                        <StatsFigure title="Games played" stat={career.matches} width="50%"/>
                        <StatsFigure title="Total Wins" stat={career.wins} width="50%"/>
                    </View>
                    <View style={styles.agents}>
                        <AgentCard  agent={agents[topAgents[0][0]].name} kills={topAgents[0][1]} width="33%" />
                        <AgentCard  agent={agents[topAgents[1][0]].name} kills={topAgents[1][1]} width="33%"/>
                        <AgentCard  agent={agents[topAgents[2][0]].name} kills={topAgents[2][1]} width="33%"/>
                    </View>
                    <View style={styles.weapon}>
                        <Text style={styles.header}>Best Weapon</Text>
                        <WeaponCard 
                            weapon={weapons[topWeapon[0].key]} 
                            width="90%" 
                            kills={topWeapon[0].kills} 
                            headshots={career.weaponDamageStats[topWeapon[0].key].headshots}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    agents: {
        flexDirection: 'row',
        marginVertical: 10,
    },  
    background: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    close: {
        position: 'absolute',
        top: 10,
        left: 15
    },  
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingTop: 50
    },
    header: {
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: colors.primary,
        color: colors.dark,
        paddingHorizontal: 20,
        marginBottom: 5,
    },
    info: {
        backgroundColor: colors.semi,
        flex: 0.8,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        flexDirection: 'row'
    },
    rank: {
        width: 45,
        height: 45,
        marginLeft: 10
    },
    main: {
        // width: '100%',
        flexDirection: 'row',
        marginVertical: 5,
        // backgroundColor: colors.semiLight,
        // marginHorizontal: 5
    },
    secondary: {
        alignItems: 'center',
        marginVertical: 5
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },  
    weapon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        backgroundColor: colors.semiLight,
        marginHorizontal: 5
    }
})


export default ProfileScreen