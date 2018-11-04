import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Reminders from './Components/Reminders';


// SIGN UP SCREEN
export default class AddEditRemindersScreen extends React.Component {
  constructor(props) {
    super(props),
      this.state = {
        reminderName: '',
        reminderAmount: '',
        reminderArray: '',
      }
  }

  // PAGE TITLE
  static navigationOptions = {
    title: 'Add/Edit Reminders',
  };


  // DAY AND TIMER PICKER IN DIFFERENT STATES
  state = {
    isDateTimePickerVisible: false,
    selectedDate: "",
  };


  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    this.setState({
      isDateTimePickerVisible: false,

      selectedDate: date.toString() || moment
    });
    this._hideDateTimePicker();
  };




  render() {

    const { isDateTimePickerVisible, selectedDate } = this.state;

    // let reminders = this.state.remindersArray.map((value, field) => {
    //   return <Reminder field={field} value={field} val={value}
    //           deleteMethod={()=>this.deleteReminder(value)} />
    //         })


    return (
      <View style={styles.container}>

        <KeyboardAvoidingView behavior='position'>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>ADD REMINDER</Text>
          </View>

          {/* CONTAINER WITH ALL FORM COMPONENTS*/}
          <View>

            {/* MEDICINE NAME INPUT*/}
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ reminderName: text })}
              // value={this.state.reminderName}
              placeholder='Medicine Name'
            />

            {/* AMOUNT INPUT */}
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ reminderAmount: text })}
              // value={this.state.reminderAmount}
              placeholder='amount'
            />
          </View>

          {/* DATE AND TIME SECTION*/}
          <View>
            <Text style={styles.text}>Date and time you would like Pill Box to remind you.</Text>
          </View>

          {/* DATE AND TIME PICKER */}
          <View style={styles.buttonContainer}>
            <Button onPress={this._showDateTimePicker} title='Pick a date'>
            </Button>
          </View>

          <Text style={styles.text}>{selectedDate}</Text>


          {/* NATIVE ANDROID CALENDAR AND TIME MODULE */}
          <DateTimePicker
            isVisible={isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            mode={'datetime'}
            is24Hour={false}
            datePickerModeAndroid={'spinner'}
          />

        </KeyboardAvoidingView>

      </View>
    );
  }
}


// ADD/EDIT PAGE STYLE
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
    color: 'white',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: 'bold',
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
  buttonContainer: {
    margin: 10,
  },
});