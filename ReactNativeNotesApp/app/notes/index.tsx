import { useNavigation, router } from 'expo-router';
import {View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { items } from '@/assets/data';

export default function NotesScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Notes App</Text>
    <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity
                onPress={() =>
                    router.push({ pathname: "/notes/[id]", params: { id: item.id } })
                }
            >
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardBody}>{item.body}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
</View>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardBody: {
    fontSize: 14,
    color: '#555',
  },
});
