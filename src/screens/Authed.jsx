import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../redux/SignupReducer';
import { Button } from '../components';


class Authed extends Component {
    render() {
        return <View>
        <Text>You are logged in</Text>
        <Button buttonName = 'Log Out'
                onPress= {() => this.props.logout()}/>
    </View> 
    }
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => {
        dispatch(logout())
    }
});

export default connect(null, mapDispatchToProps)(Authed);