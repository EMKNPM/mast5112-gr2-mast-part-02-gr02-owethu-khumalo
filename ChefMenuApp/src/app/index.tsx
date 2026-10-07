import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <Image
        source={require('../../assets/images/Chef logo.png')}
        style={styles.logoImage}
      />

      <Text style={styles.title}>ChefMenu</Text>

      <Text style={styles.subtitle}>
        Restaurant Menu Management
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Welcome, Chef Christoffel</Text>

        <Text style={styles.cardText}>
          Manage your restaurant menu by adding and viewing
          menu items in one place.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/menu')}
      >
        <Text style={styles.buttonText}>VIEW MENU</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {}}
      >
        <Text style={styles.addButtonText}>ADD MENU ITEM</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 60,
  },

  logoImage: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2F1B12',
  },

  subtitle: {
    fontSize: 16,
    color: '#8B4513',
    marginTop: 5,
    marginBottom: 30,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2F1B12',
    marginBottom: 10,
  },

  cardText: {
    fontSize: 15,
    color: '#5C4A42',
    lineHeight: 22,
  },

  button: {
    width: '100%',
    backgroundColor: '#8B4513',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  addButton: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#8B4513',
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: 'center',
  },

  addButtonText: {
    color: '#8B4513',
    fontSize: 16,
    fontWeight: 'bold',
  },
});