import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Login from '../src/screens/Login';
import Signup from '../src/screens/Signup';
import Authed from '../src/screens/Authed';


class Wrapper extends Component {

    render() {
        return (
            <View>
                {this.props.verified ? <Login/>: this.props.loggedin||this.props.token? <Authed/> : <Signup/>}
            </View>
        );
    }

}
const mapStateToProps = state => {
    console.log(state)
    return {
        verified: state.SignupReducer.verified,
        loggedin: state.SignupReducer.loggedin,
        token: state.SignupReducer.token
    }
}

export default connect(mapStateToProps)(Wrapper);