import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import treaties from '@/assets/data/treaties.json';
import { Image } from 'expo-image';

export default function TreatyDetailScreen() {
  const { id } = useLocalSearchParams();
  const treaty = treaties.find(t => t.id === id);

  if (!treaty) {
    return <Text>Treaty not found</Text>;
  }

  return (
    <ThemedView style={styles.container}>
      <Image source={{ uri: treaty.image_url }} style={styles.image} />
      <ThemedText type="title">{treaty.name}</ThemedText>
      <ThemedText type="subtitle">{treaty.date}</ThemedText>
      <ThemedText style={styles.summary}>{treaty.summary}</ThemedText>
      <ThemedText style={styles.context}>{treaty.historical_context}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 12,
  },
  summary: {
    marginTop: 12,
  },
  context: {
    marginTop: 12,
  },
});
