import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import firebase from 'firebase'
import MenuButton from '../components/MenuButton'

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }


  _bootstrapAsync = async () => {
    console.log("Authed User: ", firebase.auth().currentUser)
    this.props.navigation.navigate(false ? 'App' : 'Auth');
  };

 
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
      
    },
    textContainer: {
      flex: 1,
      alignItems: 'center',
      marginHorizontal: 50,
      paddingTop: '50%',
    },
    textInput: {
      fontSize: 17,
      lineHeight: 24,
      width: '75%',
    },
    text: {
      fontSize: 17,
      color: 'rgba(96,100,109,1)',
      lineHeight: 24,
      width: '75%',
      textAlign: 'center',
      marginBottom: '10%',
    },
    
  });
