// screens/AddRatingScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function AddRatingScreen() {
  const [rating, setRating] = useState('');
  const [note, setNote] = useState('');

  const submitRating = () => {
    // Submit the rating logic
    console.log('Rating:', rating);
    console.log('Note:', note);
  };

  return (
    <View className="p-4">
      <Text className="text-lg font-bold">Add / Rate View</Text>
      <Text>Restaurant: KFC</Text>
      <TextInput
        className="border p-2 my-2"
        placeholder="Rating (1-10)"
        keyboardType="numeric"
        value={rating}
        onChangeText={setRating}
      />
      <TextInput
        className="border p-2 my-2"
        placeholder="Note"
        value={note}
        onChangeText={setNote}
      />
      <Button title="Submit Rating" onPress={submitRating}  />
    </View>
  );
}
