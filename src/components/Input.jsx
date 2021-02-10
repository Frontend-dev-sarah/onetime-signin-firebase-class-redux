import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';


const Input = ({lable, onChangeText, value}) => {
    return (
        <View style = {styles.containter}>
            <Text>{lable}</Text>
            <TextInput 
            style = {styles.input}
            onChangeText = {onChangeText}
            value = {value}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containter: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,  
        margin: 10
    },
    input: {
        height: 30,
        width: 200,
        marginLeft: 10      
    }
})

export default Input;