import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import treaties from '../../data/treaties.json';
import { getPeriodStyles, Period } from '../../theme/periods';

// Define the type for a single treaty
interface Treaty {
  id: string;
  name: string;
  date: string;
  location: string;
  period: Period;
  summary: string;
  signatories: string[];
  historical_context: string;
  image_url: string;
}

const DetailScreen = () => {
  const { id } = useLocalSearchParams();
  const treaty = (treaties as Treaty[]).find((t) => t.id === id);

  if (!treaty) {
    return (
      <View style={styles.container}>
        <Text>Treaty not found.</Text>
      </View>
    );
  }

  const periodStyles = getPeriodStyles(treaty.period);

  return (
    <ScrollView style={[styles.baseContainer, periodStyles.container]}>
      <Stack.Screen options={{ title: treaty.name }} />
      <Image source={{ uri: treaty.image_url }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={periodStyles.title}>{treaty.name}</Text>
        <Text style={periodStyles.subtitle}>{treaty.date} - {treaty.location}</Text>

        <Text style={periodStyles.sectionTitle}>Summary</Text>
        <Text style={periodStyles.paragraph}>{treaty.summary}</Text>

        <Text style={periodStyles.sectionTitle}>Historical Context</Text>
        <Text style={periodStyles.paragraph}>{treaty.historical_context}</Text>

        <Text style={periodStyles.sectionTitle}>Signatories</Text>
        <Text style={periodStyles.paragraph}>{treaty.signatories.join(', ')}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
  },
  container: { // This is a fallback, the periodStyles.container will override it
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: 250,
  },
  contentContainer: {
    padding: 20,
  },
});

export default DetailScreen;
