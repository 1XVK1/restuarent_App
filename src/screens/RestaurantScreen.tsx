// screens/RestaurantScreen.tsx
import React from 'react';
import { View, Text, Image } from 'react-native';

export default function RestaurantScreen() {
  return (
    <View className="p-4">
      <Text className="text-lg font-bold">Restaurant View</Text>
      <Text className="text-base">KFC</Text>
      <Text className="text-sm">Address: Some address here</Text>
      <View className="flex-row">
        <Image source={{ uri: 'https://via.placeholder.com/100' }} className="w-24 h-24 mr-2" />
        <Image source={{ uri: 'https://via.placeholder.com/100' }} className="w-24 h-24 mr-2" />
        <Image source={{ uri: 'https://via.placeholder.com/100' }} className="w-24 h-24" />
      </View>
    </View>
  );
}
