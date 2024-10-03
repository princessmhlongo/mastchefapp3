import React, { useState } from 'react';
import { TextInput, Button, View, Text, StyleSheet } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [message, setMessage] = useState('');

  const checkPasswordStrength = () => {
    const length = password.length;
    
    if (length >= 10) {
      setStrength('Strong');
    } else if (length >= 6 && length < 10) {
      setStrength('Moderate');
    } else if (length > 0 && length < 6) {
      setStrength('Weak');
    } else {
      setStrength('Enter a password!');
    }
  };

  const handleLogin = () => {
    if (email && password) {
      // Logic for login can be added here
      setMessage('Login successful!');
    } else {
      setMessage('Please enter both email and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Button title="Check Password Strength" onPress={checkPasswordStrength} />
      <Text style={styles.result}>{strength}</Text>

      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.result}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  result: {
    fontSize: 18,
    marginTop: 16,
    textAlign: 'center',
  },
});