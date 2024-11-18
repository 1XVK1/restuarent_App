import React from 'react';
import { View, Text, FlatList } from 'react-native';

const restaurantList = [
  { id: '1', name: 'Sushiro', rating: 10 },
  { id: '2', name: 'Ichiran', rating: 9.2 },
];

export default function ListScreen() {
  return (
    <View className="p-4">
      <Text className="text-lg font-bold mb-4">Restaurant List View</Text>
      <FlatList
        data={restaurantList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mb-2">
            <Text className="text-base">{item.name}: {item.rating}/10</Text>
          </View>
        )}
      />
    </View>
  );
}
