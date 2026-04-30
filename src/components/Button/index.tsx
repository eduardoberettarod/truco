import { TouchableOpacity, TouchableOpacityProps, Text, View } from "react-native";
import { styles } from './style';

type Props = TouchableOpacityProps & {
    text: string;
    active?: boolean;
};

export default function Button({ text, active = false, ...rest }: Props) {
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            {...rest}
            style={[styles.button, active && styles.buttonActive]}>
            <Text style={[styles.texto, active && styles.textoActive]}>{text}</Text>
        </TouchableOpacity>
    );
}