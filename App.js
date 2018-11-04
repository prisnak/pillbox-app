import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';
// // SCREENS
import HomeScreen from "./src/Home";
import LoginScreen from "./src/Login";
import SignUpScreen from "./src/SignUp";
import SettingsScreen from "./src/Settings";
import AddEditRemindersScreen from "./src/AddEditReminders";


// export default class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { isLoggedIn: false };
  
//   }


//   // checking if user is already signed in
//   componentDidMount() {
//     AsyncStorage.getItem('loggedInStatus',
//     (value) => {this.setState({ loggedInStatus: value })}
//     );
//   }

//   render() {
//     if (this.state.loggedInStatus === 'loggedIn') {
//       return <SignedIn />
//     }
//     else if (this.state.loggedInStatus === 'loggedOut') {
//       return <SignedOut screenProps={{ isLoggedIn: () => this.setState({ loggedInStatus: 'loggedIn' }) }}/>
//     }
 
//     return <App />
//   }
// }


// ROUTES
export default SignedOut = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    "Sign Up": {screen: SignUpScreen},
    Home: {screen: HomeScreen},
    "Add/Edit Reminders": {screen: AddEditRemindersScreen},    
    Settings: {screen: SettingsScreen},
  },
)

// export const SignedIn = createBottomTabNavigator(
//   {
//     Home: {screen: HomeScreen},
//     "Add/Edit Reminders": {screen: AddEditRemindersScreen},    
//     Settings: {screen: SettingsScreen},
//   }
// )


// export const createRootStack = createSwitchNavigator(
//   {
//     Loading: App,
//     SignedIn: SignedIn,
//     SignedOut: SignedOut,
//   },
//   {
//     initialRouteName: 'SignedOut',
//   }
// );