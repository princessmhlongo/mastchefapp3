import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList, WorkoutDetails } from './type';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableHighlight, SafeAreaView } from 'react-native';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ManageWorkoutScreen" component={ManageWorkouts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//__________________This is the defination of the Homescreen_______________// 

type HomeScreenProp = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>; // Properties of HomeScreen passed from the RootParamList defined in types.tsx

const HomeScreen: React.FC<HomeScreenProp> = (props) => {
  const [workouts, setWorkout] = useState<WorkoutDetails[]>([]); // workouts holds the list of Workouts[] defined in RootStackParamList
  const [totalCalories, setTotalCalories] = useState<number>(0); // this variable will hold the constantly changing total calories whenever user enters new workout
  const totalWorkouts = workouts.length; // holds the total length of workouts

  // below is the UI definition of the HomeScreen
  return (
    <SafeAreaView style={styles.itemContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.trackerName}>FITNESS TRACKER</Text>
      </View>
      <View style={styles.summaryContainer}>
        {/* Add more UI elements and logic here */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
  },
  headingContainer: {
    alignItems: 'center',
  },
  trackerName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  summaryContainer: {
    marginTop: 20,
  },
});