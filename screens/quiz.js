import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Quiz = ({navigation}) => {
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const getQuiz=async() => {
        const url = 'http://localhost:3000/api/quizzes';
        const ress = await fetch(url);
        const data = await ress.json();
        setQuestions(data.results);
    };
    useEffect(()=>{
        getQuiz();
    },[]);
    return (
        <View style={styles.container}>
         {questions &&(
            <View style={styles.parent}>
                <View style={styles.top}>
                    <Text style={styles.question}>
                        Ini adalah Quiz
                    </Text>
                </View>
                <View style={style.options}>
                    <TouchableOpacity style={styles.optionButtom}>
                        <Text styles={styles.option}>Pilihan 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButtom}>
                        <Text styles={styles.option}>Pilihan 1</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity styles={styles.button}>
                        <Text styles={styles.buttonText}>LEWATI</Text>
                    </TouchableOpacity>

                    <TouchableOpacity styles={styles.button}>
                        <Text styles={styles.buttonText}>LANJUT</Text>
                    </TouchableOpacity>
                </View>
            </View> 
         )}
        </View>
    );
};

export default Quiz;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
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
    button: {
        backgroundColor: '#1A759F',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
    question: {
        fontSize: 28,
    },
    option: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
    },
    optionButtom: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#34A0A4',
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    parent: {
        height: '100',
    },
});