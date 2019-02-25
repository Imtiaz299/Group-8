import React from 'react';
//import { ExpoLinksView } from '@expo/samples';
import firebaseAPI from '../modules/firebaseAPI'
import { StyleSheet, Text, View, Platform, TextInput, TouchableOpacity
 } from 'react-native';

import MenuButton from '../components/MenuButton'

export default class LoginScreen extends React.Component {
  static navigationOption ={
    title: 'Links',
  };

  state= {
    email: "Enter email",
    password: "Enter password"
  };

  submit(){
       firebaseAPI.createUser(this.state.email, this.state.password)
  }

  render() {
    return (
      
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Create an account below</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text)=>this.setState({email})}
              value={this.state.email}
            />

            <TextInput
              style={styles.textInput}
              onChangeText={(text)=>this.setState({password})}
              value={this.state.password}
            />

            <TouchableOpacity
              style={{marginTop: '5%'}}
              onPress={() => {}}>
              <View>
                 <Text>Submit</Text>
              </View>
            </TouchableOpacity>
            <MenuButton navigation={this.props.navigation} />
          </View>
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
