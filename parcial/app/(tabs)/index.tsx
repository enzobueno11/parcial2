import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Viajes by Nerea</Text>
      <Button
        title="Mostrar los destinos disponibles"
        onPress={() => navigation.navigate('destinationsc')}
      />
      <Button
        title="Agregar destino nuevo"
        onPress={() => navigation.navigate('adddestination')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;