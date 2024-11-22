import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dish } from '../type';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [dishes, setDishes] = useState<Dish[]>([]);

  const calculateAverage = () => {
    if (dishes.length === 0) return 0;
    const total = dishes.reduce((sum, dish) => sum + dish.price, 0);
    return (total / dishes.length).toFixed(2);
  };

  const removeDish = (id: number) => {
    setDishes(dishes.filter((dish) => dish.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ChefApp</Text>
      <Text style={styles.average}>Average Price: R {calculateAverage()}</Text>

      <FlatList
        data={dishes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.dishItem}>
            <Text style={styles.dishName}>{item.name}</Text>
            <TouchableOpacity onPress={() => removeDish(item.id)} style={styles.deleteButton}>
              <Text style={styles.buttonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigation.navigate('ManageDishes')} style={styles.button}>
          <Text style={styles.buttonText}>Manage Dishes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')} style={styles.button}>
          <Text style={styles.buttonText}>Filter Dishes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFFFFF' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  average: { fontSize: 18, marginBottom: 20 },
  dishItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 5 },
  dishName: { fontSize: 16 },
  deleteButton: { backgroundColor: '#FF7043', padding: 5, borderRadius: 5 },
  buttonText: { color: '#FFFFFF', fontSize: 14 },
  buttons: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
  button: { backgroundColor: '#AED581', padding: 10, borderRadius: 5 },
});
export default HomeScreen;
