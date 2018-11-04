import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// MAIN PAGE AFTER LOGIN
export default class Reminder extends React.Component {
  constructor() {
    super();

    this.state = {
      reminder: '',
    }
  }

  // PAGE TITLE
  static navigationOptions = {
    title: 'Reminders'
  };

  render() {
    return (
      <View style={styles.container}>

        

          {/* Block of reminders */}
          <View name={this.props.reminderValue} style={styles.titleContainer}>
            <Text style={styles.text}> {this.value.date} </Text>
            <Text style={styles.text}> {this.value.reminder} </Text>
          </View>        
          

        <TouchableOpacity
            onPress={this.props.deleteMethod}
            style={styles.button}>
            <Text style={styles.buttonText}>D</Text>
        </TouchableOpacity>

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