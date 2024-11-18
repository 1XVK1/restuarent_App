import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const sampleFeed = [
  { id: '1', user: 'Eric', restaurant: 'PizzaHut', rating: 10, note: 'Delicious!' },
  { id: '2', user: 'Ben', restaurant: 'BurgerKing', rating: 8, note: 'Not bad' },
];

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View className="p-4">
      <Text className="text-lg font-bold mb-4">Home / Feed View</Text>
      <FlatList
        data={sampleFeed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mb-2">
            <Text className="text-base">{item.user} rated {item.restaurant}: {item.rating}/10</Text>
            <Text className="text-sm">Note: {item.note}</Text>
          </View>
        )}
      />
      <Button title="Go to User" onPress={() => navigation.navigate('User')} />
      <Button title="Go to Add Rating" onPress={() => navigation.navigate('AddRating')} />
    </View>
  );
}