import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

import { signup } from '../redux/SignupReducer';
import { Input, Button } from '../components';

class Signup extends Component {

    state = {
        phone: ''
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.title}>Sign Up</Text>
                <Input 
                lable = 'Mobile'
                onChangeText = {phone => this.setState({phone})}
                value = {this.state.phone}
                />
                <Button
                buttonName = 'Submit'
                onPress= {() => this.props.submit(this.state.phone)}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({

    title: {
        marginBottom: 50,
        width: Dimensions.get('window').width,
        textAlign: 'center',
        fontSize: 40
    }
})

// const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    submit: async (phone) => {
        try {
            await axios.post('https://us-central1-one-time-authentication-13d8a.cloudfunctions.net/createUser', { phone })
          let { data } =  await axios.post('https://us-central1-one-time-authentication-13d8a.cloudfunctions.net/requestOnetimePassword', { phone }) 
          if (data.success == true) {dispatch(signup(data))}
        } catch (error) {
            console.log(error)
        }
        
    }
})

export default connect(null, mapDispatchToProps)(Signup);