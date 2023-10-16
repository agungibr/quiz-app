import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Title from '../components/title';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground 
                style={ styles.background } 
                resizeMode='cover' 
                source={require('../assets/background.png')}>
                
                <Image 
                    source={require('../assets/logo_home.png')}
                    style={styles.logo_home}
                    resizeMode="contain"
                />
                <View style={styles.bannerContainer}>
                    <Image 
                        source={require('../assets/quiz.png')}
                        style={styles.banner}
                        resizeMode="contain"
                    />
                </View>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate("Quiz")} 
                    style={styles.button}>
                    <Text style={styles.buttonText}>Mulai</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    banner:{
        height: 350,
        width: 350,
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        height: '100%',
    },
    button: {
        width: '100',
        backgroundColor: '#1A759F',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 50,
        marginLeft: 30,
        marginRight: 30,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    },
    logo_home: {
        height: 70,
        width: '100%',
        marginTop: 90,
        alignItems: 'center',
    },
    background: {
        width: '100%',
        height: '100%',
        flex: 1
    },
});