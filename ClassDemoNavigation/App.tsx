import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';





// Define the types for navigation and route parameters
type RootStackParamList = {
  Home: undefined;
  Details: { studentNumber: string; name: string; surname: string };
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;



const Stack = createNativeStackNavigator<RootStackParamList>();

// Screen 1: Input Form
function HomeScreen({ navigation }: { navigation: HomeScreenNavigationProp }) {
  const [studentNumber, setStudentNumber] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  return (
    <View style={styles.containerHome}>
      <TextInput
        placeholder="Student Number"
        style={styles.input}
        value={studentNumber}
        onChangeText={setStudentNumber}
      />
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Surname"
        style={styles.input}
        value={surname}
        onChangeText={setSurname}
      />
      <Button
        title="Submit"
        onPress={() =>
          navigation.navigate('Details', { studentNumber, name, surname })
        }
      />
    </View>
  );
}

// Screen 2: Display Welcome Message
function DetailsScreen({ route }: { route: DetailsScreenRouteProp }) {
  const { studentNumber, name, surname } = route.params;

  return (
    <View style={styles.containerDetails}>
      <Text style={styles.welcomeText}>Welcome, {name} {surname}!</Text>
      <Text style={styles.studentNumberText}>Student Number: {studentNumber}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Enter Details' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Welcome' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#a1c4fd',
  },
  containerDetails: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdbb2d',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  studentNumberText: {
    fontSize: 18,
  },
});