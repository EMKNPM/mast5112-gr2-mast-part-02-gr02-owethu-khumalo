
import { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MenuContext } from './_layout';

export default function MenuScreen() {
  const router = useRouter();
  const context = useContext(MenuContext);

  if (!context) {
    return null;
  }

  const { menuItems } = context;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Menu</Text>

      <Text style={styles.subtitle}>
        Your restaurant dishes in one place
      </Text>

      <FlatList
        style={styles.list}
        data={menuItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={
          menuItems.length === 0
            ? styles.emptyContainer
            : styles.listContent
        }
        ListEmptyComponent={
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>
              No menu items yet
            </Text>
            <Text style={styles.emptyText}>
              Add your first dish to see it displayed here.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.menuCard}>
            <Text style={styles.itemName}>{item.name}</Text>

            <Text style={styles.itemDescription}>
              {item.description}
            </Text>

            <Text style={styles.course}>
              Course: {item.course}
            </Text>

            <Text style={styles.price}>
              R{item.price}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push('/add-item')}
      >
        <Text style={styles.buttonText}>+ ADD MENU ITEM</Text>
      </TouchableOpacity>

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
    paddingHorizontal: 25,
    paddingTop: 60,
    paddingBottom: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2F1B12',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#5C4A42',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 10,
  },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  emptyCard: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 12,
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2F1B12',
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 15,
    color: '#6B5B53',
    textAlign: 'center',
    lineHeight: 22,
  },
  menuCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E8D9CD',
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
    lineHeight: 20,
  },
  course: {
    fontSize: 14,
    color: '#5C4A42',
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B4513',
    marginTop: 8,
  },
  addButton: {
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
  backButton: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#8B4513',
    fontSize: 16,
    fontWeight: 'bold',
  },
});