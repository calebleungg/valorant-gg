import React, { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native"

import colors from '../config/colors'
import routes from '../navigation/routes'
import useApi from '../hooks/useApi'
import playerApi from '../api/players'

import Text from '../components/Text'
import TextInput from '../components/TextInput'
import { FlatList } from "react-native-gesture-handler";

const WelcomeScreen = ({ navigation }) => {

    const getPlayers = useApi(playerApi.getPlayers)
    const [search, setSearch] = useState([])
    
    const loadSearch = async (name) => {
        if(name.length === 0) return setSearch([]);
        let names = []
        const response = await getPlayers.request(name)
        if(response.error) return;
        const { results } = response.data
        results.map(player => {
            names.push(player)
        })
        setSearch(names)
    }

    const handleChange = (text) => {
        loadSearch(text)
    }

    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
        >  
            <View style={styles.search}>
                <Text style={styles.text}>Find your stats now.</Text>
                <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    placeholder="Search agentname#tag"
                    keyboardType="default"
                    onChangeText={text => handleChange(text)}
                    onPress={(e) => console.log(e)}
                /> 
                {getPlayers.loading && <Text style={styles.loading}> loading... </Text>}
                <FlatList
                    style={styles.list}
                    data={search}
                    keyExtractor={(player) => player._id.toString()}
                    renderItem={({ item }) => (
                        <Text 
                            style={styles.suggestion} 
                            onPress={()=>navigation.navigate(routes.PROFILE, item)} >   
                            {`${item.name}#${item.tag}`}
                        </Text>
                    )}
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    list: {
        backgroundColor: colors.semiLight,
        overflow: 'scroll'
    },
    loading: {
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    search: {
        padding: 15,
        top: 110,
    },
    suggestion: {
        paddingVertical: 15,
        paddingLeft: 10,
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
        fontWeight: 'bold'
    },  
    text: {
        width: '100%',
        textAlign: 'center',
        color: colors.white,
        fontSize: 30,
        fontWeight: 'bold'
    }
})


export default WelcomeScreen