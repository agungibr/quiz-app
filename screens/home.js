import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/title';

const Home = () => {
    return (
        <View>
            <Title />
            <View style={styles.bannerContainer}>
                <Image 
                 source={{
                    url: "https://iconscout.com/illustration/live-chat-5714059"
                }}
                 style={styles.banner}
                 resizeMode="contain"
                />
            </View>
            <TouchableOpacity>
                <Text>Mulai</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    banner:{
        height: 300,
        width: 300,
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
});