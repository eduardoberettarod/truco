import { View, Text } from 'react-native';
import { styles } from './style';
import Button from '../Button';
import ButtonCircle from '../ButtonCircle';

type Props = {
  teamName: string;
  score: number;
  onAdd: () => void;
  onAddThree: () => void;
  onRemove: () => void;
};

export default function Card({ teamName, score, onAdd, onAddThree, onRemove }: Props) {
  const scoreStr = score.toString().padStart(2, '0');

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.cardIconText}>🃏</Text>
        <Text style={styles.teamName}>{teamName}</Text>
      </View>

      <View style={styles.scoreContainer}>
        <Text style={styles.score}>{scoreStr}</Text>
      </View>

      <View style={styles.buttons}>
        <ButtonCircle text="—" onPress={onRemove} />
        <Button text="+ Ponto" onPress={onAdd} />
        <ButtonCircle text="+3" onPress={onAddThree} />
      </View>
    </View>
  );
}