import { TouchableOpacity, TouchableOpacityProps, Text, Alert } from "react-native"
import { styles } from './style'

type Props = TouchableOpacityProps & {
    text: string
}

export default function ButtonCircle({ text, ...rest }: Props) {
    return (
        <TouchableOpacity
            {...rest}
            style={styles.button}>
            <Text style={styles.texto}>{text}</Text>
        </TouchableOpacity>
    )
}