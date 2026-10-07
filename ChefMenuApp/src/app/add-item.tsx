import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function AddItemScreen() {
  const router = useRouter();

  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    if (!dishName || !description || !course || !price) {
      Alert.alert(
        'Missing Information',
        'Please complete all fields before adding the menu item.'
      );
      return;
    }

    Alert.alert(
      'Success',
      'Menu item has been added successfully.',
      [
        {
          text: 'OK',
          onPress: () => router.back(),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Menu Item</Text>

      <Text style={styles.label}>Dish Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter dish name"
        value={dishName}
        onChangeText={setDishName}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Enter dish description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>Course</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Starter, Main, Dessert"
        value={course}
        onChangeText={setCourse}
      />

      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleAddItem}
      >
        <Text style={styles.buttonText}>ADD MENU ITEM</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => router.back()}
      >
        <Text style={styles.cancelText}>CANCEL</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    padding: 25,
    paddingTop: 60,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2F1B12',
    textAlign: 'center',
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F1B12',
    marginBottom: 7,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D6C5B8',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 13,
    fontSize: 16,
    marginBottom: 18,
  },

  descriptionInput: {
    height: 90,
    textAlignVertical: 'top',
  },

  button: {
    backgroundColor: '#8B4513',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  cancelButton: {
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },

  cancelText: {
    color: '#8B4513',
    fontSize: 16,
    fontWeight: 'bold',
  },
});