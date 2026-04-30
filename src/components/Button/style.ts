import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: '#2a2e2a',
        paddingVertical: 20,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(78, 222, 163, 0.2)',
    },
    buttonActive: {
        backgroundColor: '#4edea3',
        borderColor: '#4edea3',
        shadowColor: '#4edea3',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 16,
        elevation: 8,
    },
    texto: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#4edea3',
        letterSpacing: 0.5,
    },
    textoActive: {
        color: '#0a1a0a',
    },
});