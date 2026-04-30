import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from './style';

type Props = TouchableOpacityProps & {
    text: string;
};

export default function ButtonCircle({ text, ...rest }: Props) {
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            {...rest}
            style={styles.button}>
            <Text style={styles.texto}>{text}</Text>
        </TouchableOpacity>
    );
}