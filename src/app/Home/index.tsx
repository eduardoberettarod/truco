import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '@/components/Button'
import Input from '@/components/Input'

export default function Home() {

  const [timeA, setTimeA] = useState(0)
  const [timeB, setTimeB] = useState(0)

  function fnAtualizarPlacar(time: string, valor: number) {
    if (time.toLowerCase() === 'a') {
      setTimeA(timeA + valor)
    } else if (time.toLowerCase() === 'b') {
      setTimeB(timeB + valor)
    }
  }

  return (
    <View style={styles.container}>


      <View style={styles.row}>
        <Input value={timeA.toString()} readOnly />
        <Input value='0' readOnly />
      </View>

      <View style={styles.row}>
        <Button text='+3'
          onPress={() => fnAtualizarPlacar('a', 3)}
        />
        <Button text='+3'
          onPress={() => fnAtualizarPlacar('b', 3)}
        />
      </View>

      <View style={styles.row}>
        <Button text='+1'
          onPress={() => fnAtualizarPlacar('a', 1)} />
        <Button text='+1' />
      </View>

      <View style={styles.row}>
        <Button text='-1'
          onPress={() => fnAtualizarPlacar('a', -1)}
        />
        <Button text='-1' />
      </View>

      <View style={[styles.row, { paddingTop: 32 }]}>
        <Button text='ZERAR' />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 16,
    width: '100%',
    paddingHorizontal: 16,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
