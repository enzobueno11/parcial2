import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import DestinationCard from '../../components/DestinationCard';
import { getDestinations, toggleFavorite, deleteDestination, Destination } from '../../api';

const DestinationsScreen: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    const data = await getDestinations();
    setDestinations(data.sort((a, b) => a.name.localeCompare(b.name)));
  };

  const handleToggleFavorite = async (id: string, favourite: boolean) => {
    await toggleFavorite(id, !favourite);
    fetchDestinations();
  };

  const handleDelete = async (id: string) => {
    await deleteDestination(id);
    fetchDestinations();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={destinations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DestinationCard
            destination={item}
            onToggleFavorite={() => handleToggleFavorite(item.id, item.favourite)}
            onDelete={() => handleDelete(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default DestinationsScreen;
