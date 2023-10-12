import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Quiz = ({navigation}) => {
    return (
        <View style={styles.container}>
         <View style={styles.top}>
            <Text>#</Text>
         </View>
         <View style={style.options}>
            <TouchableOpacity>
                <Text>Pilihan 1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Pilihan 1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Pilihan 1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Pilihan 1</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.bottom}>
            <TouchableOpacity>
                <Text>LEWATI</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>LANJUT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Result')}>
                <Text>SELESAI</Text>
            </TouchableOpacity>
         </View>
        </View>
    );
};

export default Quiz;

const styles = StyleSheet.create({
    container: {
        padding: 12,
        height: '100%',
    },
    top: {
        marginVertical: 16,
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent:'space-between',
        flexDirection: 'row',
    },
});