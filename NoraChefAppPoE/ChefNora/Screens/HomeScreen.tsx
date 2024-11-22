import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { MenuItem, RootStackParamList } from '../types';

export default function HomeScreen({ navigation }) {
  const [menuItems, setMenuItems] = useState([]);
  const totalItems = menuItems.length;
  const averagePrice = totalItems
    ? (menuItems.reduce((acc, item) => acc + item.price, 0) / totalItems).toFixed(2)
    : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nora Restaurant App</Text>
      <Text style={styles.subtitle}>
        Total Items: {totalItems} | Average Price: R{averagePrice}
      </Text>

      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.name}</Text>
            <Text>{item.coursetype}</Text>
            <Text>R{item.price.toFixed(2)}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={() => alert('Items Saved!')} />
        <Button title="Filter" onPress={() => navigation.navigate('Filter')} />
      </View>
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
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
