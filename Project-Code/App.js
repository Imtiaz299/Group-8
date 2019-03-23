import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import firebase from 'firebase';
import DrawerNavigator from './navigation/DrawerNavigator'

var firebaseConfig = {
  apiKey: "AIzaSyAZNBDNtxdGC9dFnpNGlqKtAIAb2wvt7hY",
  authDomain: "bacheloraccommodation-815cd.firebaseapp.com",
  databaseURL: "https://bacheloraccommodation-815cd.firebaseio.com",
  projectId: "bacheloraccommodation-815cd",
  storageBucket: "bacheloraccommodation-815cd.appspot.com",
  messagingSenderId: "290763445002"
};

firebase.initializeApp(firebaseConfig);

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
