import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import DrawerNavigator from './navigation/DrawerNavigator'

var config = {
  apiKey: "AIzaSyAZNBDNtxdGC9dFnpNGlqKtAIAb2wvt7hY",
  authDomain: "bacheloraccommodation-815cd.firebaseapp.com",
  databaseURL: "https://bacheloraccommodation-815cd.firebaseio.com",
  projectId: "bacheloraccommodation-815cd",
  storageBucket: "bacheloraccommodation-815cd.appspot.com",
  messagingSenderId: "290763445002"
};

firebase.initializeApp(config);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DrawerNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
