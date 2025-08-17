import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import treaties from '@/assets/data/treaties.json';
import { useRouter } from 'expo-router';

export default function TreatiesScreen() {
  const router = useRouter();

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => router.push(`/detail/${item.id}`)}>
      <ThemedView style={styles.itemContainer}>
        <ThemedText type="subtitle">{item.name}</ThemedText>
        <ThemedText>{item.date}</ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={treaties}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
  },
  itemContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
