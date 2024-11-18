import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

type UserScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'User'>;

export default function UserScreen() {
  const navigation = useNavigation<UserScreenNavigationProp>();

  return (
    <View className="p-4">
      <Text className="text-lg font-bold">User View</Text>
      <Text>Username: Jason</Text>
      <Text>Followers: 50 | Following: 100</Text>
      <Text>Been: 50 | Bookmark: 20</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}