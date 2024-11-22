/*
 * Code Attribution:
 * - ByteGrad (2024) Try Catch Error Handling With TypeScript [Online]. Available at: https://youtu.be/Q1euMQFI35I?si=atpoDwrnBK0Boekp (Accessed: 3 October 2024).
 * 
 * - Varsity College Durban North (2024) [Module Name] Module Manual. Durban: Varsity College.
 *
 * This project incorporates concepts and practices from the above sources to implement React Native state management, error handling, and styling techniques. The ByteGrad tutorial was used to guide error handling implementation, while Varsity College resources were utilized to understand structured design and user input validation in a mobile application context.
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './Screens/WelcomeScreen';
import HomeScreen from './Screens/HomeScreen';
import FilterScreen from './Screens/FilterScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
