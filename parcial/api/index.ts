import axios from 'axios';

const API_URL = 'http://161.35.143.238:8000/ebueno';

export interface Destination {
  id: string;
  name: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  favourite: boolean;
}

export const getDestinations = async (): Promise<Destination[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addDestination = async (destination: Omit<Destination, 'id'>): Promise<Destination> => {
  const response = await axios.post(API_URL, destination);
  return response.data;
};

export const updateDestination = async (
  id: string,
  updatedDestination: Partial<Destination>
): Promise<Destination> => {
  const response = await axios.put(`${API_URL}/${id}`, updatedDestination);
  return response.data;
};

export const deleteDestination = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export const toggleFavorite = async (id: string, favourite: boolean): Promise<void> => {
  await axios.patch(`${API_URL}/${id}`, { favourite });
};
