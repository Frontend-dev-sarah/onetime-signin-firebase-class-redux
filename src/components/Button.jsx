import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Button = ({buttonName, onPress}) => {
    return (
        <TouchableOpacity onPress = {onPress}>
        <View style = {styles.container}>
            
                <Text style= {styles.button}>{buttonName}</Text>
           
        </View>
         </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 5,
        backgroundColor: 'orange'
    },
    button: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    }
})

export default Button