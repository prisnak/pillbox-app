import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import HomeScreen from "./Home";
import SignUpScreen from "./SignUp";
import { _signUp, _login } from './services/AuthService';
import { _loadLogin } from './services/RemindersService';
import { LinearGradient } from 'expo';


// Login
export default class LoginScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: [],
      logged_in: false
    }
  }


  // DO NOT SHOW HEADER IN LOGIN PAGE
  static navigationOptions = {
    header: null
  };


  loginUser = () => {
    // alert('login ok')
  }


  render() {
    return (

      (!this.state.logged_in &&


        <View style={styles.container} >

          <KeyboardAvoidingView behavior='position'>

            <View style={styles.iconContainer}>
              <Image source={require('../assets/icon.png')} />
              <Text style={styles.text}> Welcome to the Pill Box App. </Text>
            </View>

            <View id="loginForm" style={styles.formContainer} onSubmit={this.login}>
              <TextInput
                type="text"
                name="username"
                onChangeText={(val) => this.setState({ email: val })}
                style={styles.textInput}
                placeholder='username'
              />

              <TextInput
                type="password"
                name="password"
                style={styles.textInput}
                placeholder='password'
              />

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}
                style={styles.button}
              >
                <Text style={styles.buttonText}>SIGN IN</Text>
              </TouchableOpacity>

            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Sign Up')}
              style={styles.createAccountButton}
            >
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>

          </KeyboardAvoidingView>

        </View>
      ));
  }

}


// LOGIM STYLE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01C6B2',
    justifyContent: 'center',
  },
  formContainer: {
    margin: 10,
  },
  iconContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
    margin: 10,
    fontWeight: 'bold',
  },
  textInput: {
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: 'white',
    borderColor: '#C3E6E0',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    borderColor: '#DDDCD7',
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    height: 50,
    width: 200,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2980b9',
    width: 380,
  },
  createAccountButton: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    height: 50,
    width: 200,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2980b9',
    width: 380,
  },
});