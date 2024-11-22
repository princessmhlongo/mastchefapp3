import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { MenuItem, RootStackParamList } from '../types';

export default function FilterScreen({ navigation }) {
  const [filteredItems, setFilteredItems] = useState([]);

  const handleFilter = (courseType) => {
    // Filter logic based on courseType
    const items = []; // Replace with your actual data
    const filtered = items.filter((item) => item.coursetype === courseType);
    setFilteredItems(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Items by Course</Text>

      <Button title="Salad" onPress={() => handleFilter('Salad')} />
      <Button title="Main" onPress={() => handleFilter('Main')} />
      <Button title="Dessert" onPress={() => handleFilter('Dessert')} />

      <FlatList
        data={filteredItems}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.name}</Text>
            <Text>{item.coursetype}</Text>
            <Text>R{item.price.toFixed(2)}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
