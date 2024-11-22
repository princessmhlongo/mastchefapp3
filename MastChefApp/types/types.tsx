import React from "react";

export type dishDetails = {
  dish_Name: string;
  description: string;
  course_Type: string;
  price: number;
};
export type RootStackParamList = {
  Screenmenu: {
    average: {
      AppetisersAverage: number;
      Main_CourseAverage: number;
      DessertAverage: number;
    };
  };
  FilterScreen: {
    dish: dishDetails[];
    setDish: React.Dispatch<React.SetStateAction<dishDetails[]>>;
  };
  Screenadd: {
    dish: dishDetails[];
    setDish: React.Dispatch<React.SetStateAction<dishDetails[]>>;
  };
};