import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const App = () => {
  const handlePetStatus = async () => {
    try {
      const response = await fetch('http://your-server-ip:5000/pet/status');
      const data = await response.json();
      Alert.alert('Pet Status', `Name: ${data.name}\nHealth: ${data.health}\nMood: ${data.mood}`);
    } catch (error) {
      Alert.alert('Error', 'Could not fetch pet status');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Couple App</Text>
      <Button title="Check Pet Status" onPress={handlePetStatus} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;