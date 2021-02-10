import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Input, Button } from '../components';
import axios from 'axios';
import firebase from 'firebase';
import { login } from '../redux/SignupReducer';

class Login extends Component {
    state = {
        phone: '',
        code: ''
    }

    render() {
        const { phone, code } = this.state;
        return (
            <View style = {styles.container}>
                <Text style = {styles.title}>LogIn</Text>
                <Input 
                lable = 'Mobile'
                onChangeText = {phone => this.setState({phone})}
                value = {phone}
                />
                <Input 
                lable = 'Code'
                onChangeText = {code => this.setState({code})}
                value = {code}
                />
                <Button
                buttonName = 'Log In'
                onPress= {() => this.props.login(phone,code)}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        
    },
    title: {
        marginBottom: 50,
        width: Dimensions.get('window').width,
        textAlign: 'center',
        fontSize: 40
    }
})
const mapDispatchToProps = (dispatch) => ({
    login: async(phone, code) => {
        try {
            let { data } = await axios.post('https://us-central1-one-time-authentication-13d8a.cloudfunctions.net/verifyOnetimePassword', {
                phone,
                code
            })
            dispatch(login(data.token)) 
            firebase.auth().signInWithCustomToken(data.token);
        } catch (error) {
           console.log(error) 
        }
        
    }
})
export default connect(null, mapDispatchToProps)(Login);