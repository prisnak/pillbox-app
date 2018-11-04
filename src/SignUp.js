import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
// import { _signUp, _login } from './services/AuthService';

// Sign Up Screen
export default class SignUpScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: [],
      logged_in: false
    }
  };

  static navigationOptions = {
    title: 'Sign Up'
  };

  // function to insert the information in state
  loginInfo = (value, field) => {
    if (field == 'name') {
      this.setState({
        name: value,
      })
    } else if (field == 'username') {
      this.setState({
        username: value,
      })
    } else if (field == 'email') {
      this.setState({
        email: value,
      })
    } else if (field == 'password') {
      this.setState({
        password: value,
      })
    } else if (field == 'passwordConfirmation') {
      this.setState({
        passwordConfirmation: value,
      })
    }
  }

  // function SUBMIT and check all information to submit sign up
  submit = () => {
    if (this.state.password == this.state.passwordConfirmation) {
        this.props.navigation.navigate('Login')
      }else {
      alert('password confirmation and password must be the same')
    }
  }


  render() {
    return (

      (!this.state.logged_in &&

        <View style={styles.container}>

        <KeyboardAvoidingView behavior='position'>

          {/* Block of text */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}> CREATE ACCOUNT</Text>
            <Text style={styles.text}> We will need some of your information to register you.</Text>
          </View>

          {/* container with all form components    */}
          <View id="signUpForm">
            {/* NAME INPUT*/}
            <TextInput
              style={styles.textInput}
              onChangeText={(value) => this.loginInfo(value, 'name')}
              placeholder=' Full name'
            />

            {/* USERNAME INPUT*/}
            <TextInput
              style={styles.textInput}
              onChangeText={(value) => this.loginInfo(value, 'username')}
              placeholder='username'
            />

            {/* EMAIL INPUT*/}
            <TextInput
              style={styles.textInput}
              onChangeText={(value) => this.loginInfo(value, 'email')}
              placeholder='email'
            />

            {/* PASSWORD INPUT*/}
            <TextInput
              style={styles.textInput}
              onChangeText={(value) => this.loginInfo(value, 'password')}
              placeholder='password'
              secureTextEntry={true}
            />

            {/* PASSWORD CONFIRMATION INPUT*/}
            <TextInput
              style={styles.textInput}
              onChangeText={(value) => this.loginInfo(value, 'passwordConfirmation')}
              placeholder='password confirmation'
              secureTextEntry={true}
            />

            {/* REGISTER BUTTON */}

            <TouchableOpacity
              onPress={() => this.submit()}
              style={styles.button}>
              <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>

          </View>

          </KeyboardAvoidingView>

        </View>
      )
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01C6B2',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
    margin: 10,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    margin: 5,
  },
  textInput: {
    padding: 5,
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
    width: 400,
  },
});