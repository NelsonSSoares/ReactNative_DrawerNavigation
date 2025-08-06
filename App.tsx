import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const Drawer = createDrawerNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="WelcomeScreen" >
        <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Drawer.Screen name="UserScreen" component={UserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
