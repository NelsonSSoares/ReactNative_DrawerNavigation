import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="WelcomeScreen" screenOptions={{
        drawerActiveBackgroundColor: "#f0e1ff",
        drawerActiveTintColor: "#0f0061ff",
        //drawerStyle: { backgroundColor: "#ccc" },
      }
      } >
        <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen} options={{
          headerStyle: { backgroundColor: "#610020ff" },
          headerTintColor: "white",
          drawerLabel: "Welcome",
          drawerIcon: ({ color }) => <Ionicons name="home" size={24} color={color}/>
        }} />


        <Drawer.Screen name="UserScreen" component={UserScreen} options={{
          drawerIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
        }} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
