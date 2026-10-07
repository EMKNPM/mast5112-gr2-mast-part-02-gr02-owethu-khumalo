
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
 const router = useRouter(); 
  return (
    <View style={styles.container}>
      <View style={styles.content}>
         <Image
    source={require('../../assets/images/Chef logo.png')}
    style={styles.logoImage}
  />
        <Text style={styles.logo}>ChefMenu</Text>

        <Text style={styles.title}>
          Discover Delicious Meals
        </Text>

        <Text style={styles.description}>
          Explore our menu and find your favourite meals,
          snacks and drinks all in one place.
        </Text>

        <TouchableOpacity
          style={styles.button}
         onPress={() => router.push('/menu')}
        >
          <Text style={styles.buttonText}>
            VIEW MENU
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    justifyContent: 'center',
  },

  content: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  logo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2F1B12',
    textAlign: 'center',
    marginBottom: 15,
  },

  description: {
    fontSize: 17,
    color: '#5C4A42',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 35,
  },

  button: {
    backgroundColor: '#8B4513',
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 10,
  },
  logoImage: {
  width: 120,
  height: 120,
  resizeMode: 'contain',
  marginBottom: 20,
},

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

