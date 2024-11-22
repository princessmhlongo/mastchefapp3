import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const ManageDishes: React.FC = () => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Salad');
  const [price, setPrice] = useState('');

  const saveDish = () => {
    if (!dishName || !description || !price) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    if (isNaN(Number(price))) {
      Alert.alert('Error', 'Price must be a number!');
      return;
    }

    Alert.alert('Success', 'Dish saved successfully!');
    // Logic to save the dish goes here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add a Dish</Text>

      <TextInput placeholder="Dish Name" value={dishName} onChangeText={setDishName} style={styles.input} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />
      
      <Picker selectedValue={course}  onValueChange={(itemValue: string) => setCourse(itemValue)} >
        <Picker.Item label="Salad" value="Salad" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <TextInput placeholder="Price (R)" value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.input} />

      <TouchableOpacity onPress={saveDish} style={styles.saveButton}>
        <Text style={styles.buttonText}>Save Dish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFFFFF' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 5, padding: 10, marginBottom: 15 },
  picker: { borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 5, marginBottom: 15 },
  saveButton: { backgroundColor: '#AED581', padding: 10, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#FFFFFF', fontSize: 16 },
});
export default ManageDishes;
