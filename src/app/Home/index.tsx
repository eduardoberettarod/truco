import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Card from '@/components/Card';

const MAX_SCORE = 12;
const MIN_SCORE = 0;

export default function Home() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  function clamp(value: number): number {
    return Math.min(MAX_SCORE, Math.max(MIN_SCORE, value));
  }

  function handleUpdateA(delta: number) {
    setScoreA(prev => clamp(prev + delta));
  }

  function handleUpdateB(delta: number) {
    setScoreB(prev => clamp(prev + delta));
  }

  function handleReset() {
    setScoreA(0);
    setScoreB(0);
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#0a1a0a" />
      <View style={styles.container}>
        <Card
          teamName="TIME A"
          score={scoreA}
          onAdd={() => handleUpdateA(1)}
          onAddThree={() => handleUpdateA(3)}
          onRemove={() => handleUpdateA(-1)}
        />

        <Card
          teamName="TIME B"
          score={scoreB}
          onAdd={() => handleUpdateB(1)}
          onAddThree={() => handleUpdateB(3)}
          onRemove={() => handleUpdateB(-1)}
        />

        <TouchableOpacity style={styles.resetButton} onPress={handleReset} activeOpacity={0.7}>
          <Text style={styles.resetIcon}>↺</Text>
        </TouchableOpacity>

        <Text style={styles.appTitle}>TRUCO PRO</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0a1a0a',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 14,
    backgroundColor: '#0a1a0a',
  },
  resetButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#2a2e2a',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  resetIcon: {
    color: '#cccccc',
    fontSize: 24,
    lineHeight: 28,
  },
  appTitle: {
    color: '#4edea3',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 4,
    marginTop: 2,
  },
});