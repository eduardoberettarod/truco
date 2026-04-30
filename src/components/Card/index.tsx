import { useState } from 'react';
import { View } from "react-native"
import { styles } from './style'
import Button from '../Button'
import ButtonCircle from '../ButtonCircle';

export default function Card() {

    const [timeA, setTimeA] = useState(0)
    const [timeB, setTimeB] = useState(0)

    function fnAtualizarPlacar(time: string, valor: number) {
        if (time.toLowerCase() === 'a') {
            setTimeA(timeA + valor)
        }
    }

    return (
        <View style={styles.card}>
            <ButtonCircle text='+'/>
            <Button text='+  Ponto' />
            <ButtonCircle text='+3'/>
        </View>
    )
}