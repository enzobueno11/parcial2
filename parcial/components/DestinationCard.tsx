import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Badge } from 'react-native-elements';
import { Destination } from '../api';

const colors: { [key: string]: string } = {
  easy: 'green',
  medium: 'orange',
  hard: 'red',
};

interface DestinationCardProps {
  destination: Destination;
  onToggleFavorite: () => void;
  onDelete: () => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onToggleFavorite, onDelete }) => {
  const { name, description, difficulty, favourite } = destination;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Badge
          value={difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          badgeStyle={{ backgroundColor: colors[difficulty] }}
        />
      </View>
      <Text>{description}</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  icon: {
    fontSize: 20,
  },
  delete: {
    fontSize: 20,
    color: 'red',
  },
});

export default DestinationCard;
