import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyCEbVafJC9LiZ2dA55rjZEBc-jjmbpL2xE',
      authDomain: 'one-time-password-21950.firebaseapp.com',
      databaseURL: 'https://one-time-password-21950.firebaseio.com',
      projectId: 'one-time-password-21950',
      storageBucket: 'one-time-password-21950.appspot.com',
      messagingSenderId: '1046941039622'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
