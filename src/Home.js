import React from 'react';
import { StyleSheet, Text, ScrollView , View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

// MAIN PAGE AFTER LOGIN
export default class HomeScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      alarm: '',
      medicine: '',
      amount: '',
      repetition: '',
      edit_id: '',
      haveReminders: false,
    }
  }

  // PAGE TITLE
  static navigationOptions = {
    title: 'Reminders'
  };

  render() {
    return (
      <View style={styles.container}>

        <KeyboardAvoidingView behavior='position'>

          {/* Block of text */}
          {/* <View style={styles.titleContainer}> */}
            {/* <Text style={styles.text}> HOME </Text> */}
          {/* </View> */}

          <ScrollView style={styles.scrollContainer}>

          </ScrollView>


          {/* REGISTER BUTTON */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Add/Edit Reminders')}
            style={styles.button}>
            <Text style={styles.buttonText}>ADD REMINDER</Text>
          </TouchableOpacity>

        </KeyboardAvoidingView>

      </View>
    )
  }
}


// HOME STYLE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01C6B2',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
  },
  scrollContainer:{

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