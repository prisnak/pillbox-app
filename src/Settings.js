import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';


// Sign Up Screen
export default class SettingsScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>

          <KeyboardAvoidingView behavior='position'>

          <Text>Settings Screen</Text>

          </KeyboardAvoidingView>

        </View>
      );
    }
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#01C6B2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color:'white',
      margin: 5,
    }
  });
  