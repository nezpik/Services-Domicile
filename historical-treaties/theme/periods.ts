import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

export type Period = 'Medieval' | 'Renaissance' | 'Enlightenment' | 'Modern';

interface PeriodStyles {
  card: ViewStyle;
  title: TextStyle;
  cardDate: TextStyle;
  container: ViewStyle;
  sectionTitle: TextStyle;
  paragraph: TextStyle;
  subtitle: TextStyle;
}

const medievalStyles: PeriodStyles = {
  card: {
    backgroundColor: '#e8d8c3',
    borderColor: '#5a4e40',
    borderWidth: 2,
  },
  title: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#402f2f',
  },
  cardDate: {
    fontFamily: 'serif',
    fontSize: 14,
    color: '#5a4e40',
  },
  container: {
    backgroundColor: '#d8c8b3',
  },
  sectionTitle: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#402f2f',
    borderBottomColor: '#5a4e40',
    borderBottomWidth: 1,
  },
  paragraph: {
    fontFamily: 'serif',
    fontSize: 16,
    lineHeight: 24,
    color: '#402f2f',
  },
  subtitle: {
    fontFamily: 'serif',
    fontSize: 16,
    color: '#5a4e40',
    marginBottom: 20,
  },
};

const renaissanceStyles: PeriodStyles = {
  card: {
    backgroundColor: '#fff8e7',
    borderColor: '#c8b89a',
    borderWidth: 1,
  },
  title: {
    fontFamily: 'serif', // A more ornate serif would be ideal
    fontWeight: 'normal',
    fontSize: 22,
    color: '#5c3d2e',
  },
  cardDate: {
    fontFamily: 'serif',
    fontStyle: 'italic',
    fontSize: 15,
    color: '#7c5d4e',
  },
  container: {
    backgroundColor: '#fffaf0',
  },
  sectionTitle: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 26,
    color: '#5c3d2e',
    borderBottomColor: '#c8b89a',
    borderBottomWidth: 2,
  },
  paragraph: {
    fontFamily: 'serif',
    fontSize: 17,
    lineHeight: 26,
    color: '#5c3d2e',
  },
  subtitle: {
    fontFamily: 'serif',
    fontStyle: 'italic',
    fontSize: 17,
    color: '#7c5d4e',
    marginBottom: 20,
  },
};

const enlightenmentStyles: PeriodStyles = {
  card: {
    backgroundColor: '#f5f5f5',
    borderColor: '#b0b0b0',
    borderWidth: 1,
  },
  title: {
    fontFamily: 'sans-serif', // A clean, rational font
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333333',
  },
  cardDate: {
    fontFamily: 'sans-serif',
    fontSize: 14,
    color: '#555555',
  },
  container: {
    backgroundColor: '#e5e5e5',
  },
  sectionTitle: {
    fontFamily: 'sans-serif',
    fontWeight: '300', // Lighter weight
    fontSize: 24,
    color: '#333333',
    borderBottomColor: '#b0b0b0',
    borderBottomWidth: 1,
  },
  paragraph: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    lineHeight: 25,
    color: '#333333',
  },
  subtitle: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    color: '#555555',
    marginBottom: 20,
  },
};

const modernStyles: PeriodStyles = {
  card: {
    backgroundColor: '#ffffff',
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 4,
  },
  title: {
    fontFamily: 'sans-serif',
    fontWeight: '600',
    fontSize: 20,
    color: '#111111',
  },
  cardDate: {
    fontFamily: 'sans-serif',
    fontSize: 14,
    color: '#444444',
  },
  container: {
    backgroundColor: '#f0f0f0',
  },
  sectionTitle: {
    fontFamily: 'sans-serif',
    fontWeight: '600',
    fontSize: 22,
    color: '#111111',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },
  paragraph: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    lineHeight: 24,
    color: '#111111',
  },
  subtitle: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    color: '#444444',
    marginBottom: 20,
  },
};


const periodStyles: Record<Period, PeriodStyles> = {
  Medieval: medievalStyles,
  Renaissance: renaissanceStyles,
  Enlightenment: enlightenmentStyles,
  Modern: modernStyles,
};

export const getPeriodStyles = (period: Period): PeriodStyles => {
  return periodStyles[period] || modernStyles; // Default to modern styles
};
