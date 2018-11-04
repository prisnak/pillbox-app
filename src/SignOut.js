import { createStackNavigator } from "react-navigation";

import SignUpScreen from "./src/SignUp";
import LoginScreen from "./src/Login";

export default SignedOut = createStackNavigator({
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      title: "Sign Up"
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Sign In"
    }
  }
});