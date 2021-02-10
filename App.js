import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/redux';
import { StyleSheet, View } from 'react-native';
import Wrapper from './src/Wrapper';

const store = createStore(reducers)

export default function App() {
  return (
    <Provider store = {store}>
    <View style={styles.container}>
      <Wrapper/>
      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
