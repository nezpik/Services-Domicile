import React from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import treaties from '../data/treaties.json';
import { Colors } from '../theme/colors';
import { getPeriodStyles, Period } from '../theme/periods';

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

const HomeScreen = () => {
  const renderItem = ({ item }: { item: Treaty }) => {
    const periodStyles = getPeriodStyles(item.period);

    return (
      <Link href={`/detail/${item.id}`} asChild>
        <TouchableOpacity style={[styles.cardBase, periodStyles.card]}>
          <Image source={{ uri: item.image_url }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={periodStyles.title}>{item.name}</Text>
            <Text style={periodStyles.cardDate}>{item.date}</Text>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={treaties as Treaty[]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.parchment,
  },
  cardBase: {
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    padding: 16,
  },
});

export default HomeScreen;
