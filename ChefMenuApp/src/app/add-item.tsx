
import { useContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MenuContext } from './_layout';
import type { MenuItem } from '../data/menuData';

export default function AddItemScreen() {
  const router = useRouter();
  const context = useContext(MenuContext);

  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!context) {
    return null;
  }

  const { menuItems, setMenuItems } = context;
  Alert.alert('Test', 'The button is working!');

const handleAddItem = () => {
  console.log('Add item pressed');

 if (
  !dishName.trim() ||
  !description.trim() ||
  !course.trim() ||
  !price.trim()
) {
  setErrorMessage('Please complete all fields before adding the dish.');
  return;
}

const priceNumber = Number(price);

if (!Number.isFinite(priceNumber) || priceNumber <= 0) {
  setErrorMessage('Please enter a valid price greater than R0.');
  return;
}

setErrorMessage('');

  const newItem: MenuItem = {
    id: Date.now().toString(),
    name: dishName.trim(),
    description: description.trim(),
    course: course.trim(),
    price: priceNumber.toFixed(2),
  };

   setMenuItems((currentItems) => [
    ...currentItems,
    newItem,
  ]);

  router.push('/menu');
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

      <Text style={styles.label}>Price (R)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        value={price}
        onChangeText={setPrice}
        keyboardType="decimal-pad"
      />
      {errorMessage ? (
  <Text style={styles.errorText}>
    {errorMessage}
  </Text>
) : null}

    <TouchableOpacity
  style={styles.button}
  onPress={handleAddItem}
>

  <Text style={styles.buttonText}>ADD MENU ITEM</Text>
</TouchableOpacity>

      <TouchableOpacity
  style={styles.cancelButton}
  onPress={() => {
    router.replace('/');
  }}
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
  errorText: {
  color: '#D32F2F',
  fontSize: 14,
  fontWeight: 'bold',
  marginBottom: 10,
},
});