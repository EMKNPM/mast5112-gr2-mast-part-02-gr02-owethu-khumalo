import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function MenuScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Menu</Text>

      <Text style={styles.subtitle}>
        Choose something delicious
      </Text>

      <View style={styles.menuCard}>
        <Text style={styles.itemName}>Classic Burger</Text>
        <Text style={styles.itemDescription}>
          Beef burger with cheese, lettuce and tomato
        </Text>
        <Text style={styles.price}>R85</Text>
      </View>

      <View style={styles.menuCard}>
        <Text style={styles.itemName}>Chicken Pasta</Text>
        <Text style={styles.itemDescription}>
          Creamy pasta with grilled chicken
        </Text>
        <Text style={styles.price}>R95</Text>
      </View>

      <View style={styles.menuCard}>
        <Text style={styles.itemName}>Margherita Pizza</Text>
        <Text style={styles.itemDescription}>
          Tomato, mozzarella and fresh basil
        </Text>
        <Text style={styles.price}>R90</Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backButtonText}>BACK</Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2F1B12',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 17,
    color: '#5C4A42',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 25,
  },

  menuCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },

  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2F1B12',
  },

  itemDescription: {
    fontSize: 14,
    color: '#6B5B53',
    marginTop: 6,
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B4513',
    marginTop: 10,
  },

  backButton: {
    backgroundColor: '#8B4513',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});