import React from "react";

export type WorkoutDetails = {
    work_Name: string;
    duration: number;
    exercise_Type: string;
    calories: number;
  };
  
  export type RootStackParamList = {
    HomeScreen: undefined; // No parameters are passed to HomeScreen. 'undefined' means this screen does not expect any props.
  
    ManageWorkoutScreen: {
      workouts: WorkoutDetails[]; // An array of WorkoutDetails objects passed to ManageWorkoutScreen.
      setWorkout: React.Dispatch<React.SetStateAction<WorkoutDetails[]>>; // Function to set the workout state.
      totalCalories: number; // Total calories to be passed to the ManageWorkoutScreen.
      setTotalCalories: React.Dispatch<React.SetStateAction<number>>; // Function to set the total calories state.
    };
  };