import { TouchableOpacity, TouchableOpacityProps, Text, Alert } from "react-native"
import { styles } from './style'

type Props = TouchableOpacityProps & {
    text: string
}

export default function Button({ text, ...rest }: Props) {
    return (
        <TouchableOpacity
            // onPress={() => Alert.alert("Aviso", "Você clicou")}
            {...rest}
            style={styles.button}>
            <Text style={styles.texto}>{text}</Text>
        </TouchableOpacity>
    )
}