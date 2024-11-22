
// Define the structure of a menu itemexport interface MenuItem {
export type MenuItem = {
    name: string;
    description: string;
    coursetype: string; // Salad, Main, or Dessert
    price: number;
  };
  
  // Define the props for navigation
  export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
    Filter: undefined; // Pass params here if needed
  };
  