import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { WorkoutDetails } from './type';

export default function App() {
  // useState hook is used to manage the state of the variables that are going to change
  const [workouts, setWorkouts] = useState<WorkoutDetails[]>([]); // workouts holds the array of workout details
  const [workoutName, setWorkoutName] = useState<string>(''); 
  const [duration, setDuration] = useState<string>(''); // Corrected useState capitalization
  const [exerciseType, setType] = useState<string>(''); // Fixed typo in 'exerciseType' and corrected setType syntax
  const [calories, setCalories] = useState<string>(''); // Corrected useState capitalization

  // Function to add the new workout details to the workouts array
  const handleSubmit = () => {
    if (workoutName && duration && exerciseType && calories) {
      const newWorkout: WorkoutDetails = {
        workout_Name: workoutName, // User input for the new workout added to the new object
        duration: parseInt(duration), // Converts duration from string to number
        exercise_Type: exerciseType, // User's selected value for exercise type from the picker
        calories: parseInt(calories), // Converts calories from string to number
      };

      setWorkouts([...workouts, newWorkout]); // Updating the workouts list with the newly added workout
      setWorkoutName(''); 
      setDuration(''); 
      setType(''); 
      setCalories(''); 
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headingContainer}>
        <Text style={styles.trackerName}>FITNESS TRACKER</Text>
      </View>

      <View style={styles.listView}>
        <FlatList
          data={workouts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.workoutItem}>
              <Text style={styles.workName}>Workout Name: {item.workout_Name}</Text>
              <Text style={styles.otherDetails}>Duration: {item.duration} min</Text>
              <Text style={styles.otherDetails}>Workout Type: {item.exercise_Type}</Text>
              <Text style={styles.otherDetails}>Calories Burnt: {item.calories}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.userInputView}>
        <TextInput
          style={styles.input}
          placeholder="Workout name"
          value={workoutName}
          onChangeText={setWorkoutName}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Duration (min)"
          value={duration}
          onChangeText={setDuration}
          inputMode="numeric"
        />
      </View>

      <Picker
        selectedValue={exerciseType}
        onValueChange={(itemValue) => setType(itemValue)}
        style={styles.input}
      >
        {/* Assuming ExerciseType is an array of strings */}
        {['Cardio', 'Strength', 'Flexibility', 'Balance'].map((exerciseType) => (
          <Picker.Item label={exerciseType} value={exerciseType} key={exerciseType} />
        ))}
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Calories burnt"
        value={calories}
        onChangeText={setCalories}
      />

      <TouchableHighlight onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  headingContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  trackerName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  listView: {
    flex: 1,
    marginVertical: 20,
  },
  workoutItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  workName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  otherDetails: {
    fontSize: 16,
    color: '#777',
  },
  userInputView: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});