import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Result = () => {
    return (
        <View>
            <View>
                <Text>Hasil</Text>
            </View>
            <View style={styles.bannerContainer}>
                <Image
                    source={{
                        url: '#'
                    }}
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Result;

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