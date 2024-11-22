import React, { useState } from 'react';
import { View, Text, Picker, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Dish } from '../type';

const FilterScreen: React.FC = () => {
  const [course, setCourse] = useState('Salad');
  const [filteredDishes, setFilteredDishes] = useState<Dish[]>([]);

  const dishes: Dish[] = [
    { id: 1, name: 'Caesar Salad', description: 'Fresh salad with Caesar dressing', course: 'Salad', price: 50 },
    { id: 2, name: 'Beef Steak', description: 'Juicy grilled steak', course: 'Main', price: 150 },
    { id: 3, name: 'Chocolate Cake', description: 'Rich chocolate dessert', course: 'Dessert', price: 80 },
  ];

  const filterDishes = () => {
    const results = dishes.filter((dish) => dish.course === course);
    if (results.length === 0) {
      Alert.alert('No Dishes Found', `There are no dishes available under ${course}.`);
    }
    setFilteredDishes(results);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filter by Course Type</Text>

      <Picker selectedValue={course} onValueChange={(itemValue: string) => setCourse(itemValue)}>
        <Picker.Item label="Salad" value="Salad" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <TouchableOpacity onPress={filterDishes} style={styles.filterButton}>
        <Text style={styles.buttonText}>Filter</Text>
      </TouchableOpacity>

      <FlatList
        data={filteredDishes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.dishItem}>
            <Text style={styles.dishName}>{item.name}</Text>
            <Text style={styles.dishDescription}>{item.description}</Text>
            <Text style={styles.dishPrice}>Price: R {item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFFFFF' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  picker: { height: 50, borderWidth: 1, borderColor: '#CCCCCC', marginBottom: 20 },
  filterButton: { backgroundColor: '#AED581', padding: 10, borderRadius: 5, alignItems: 'center', marginBottom: 20 },
  buttonText: { color: '#FFFFFF', fontSize: 16 },
  dishItem: { borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 5, padding: 10, marginBottom: 10 },
  dishName: { fontSize: 16, fontWeight: 'bold' },
  dishDescription: { fontSize: 14, color: '#666666' },
  dishPrice: { fontSize: 14, fontWeight: 'bold', marginTop: 5 },
});
export default FilterScreen;
