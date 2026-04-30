
import { StyleSheet, Text, View } from 'react-native';
import Card from '@/components/Card'

export default function Home() {



  return (
    <View style={styles.container}>

      <View style={styles.row}>
        <Card />
      </View>
      
      <View style={styles.row}>
        <Card />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginTop: 16,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
