import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: '#111c11',
    borderWidth: 1,
    borderColor: 'rgba(78, 222, 163, 0.12)',
    padding: 18,
    paddingBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 0,
    position: 'relative',
  },
  cardIconText: {
    fontSize: 15,
    color: 'rgba(78, 222, 163, 0.22)',
    fontWeight: '400',
    letterSpacing: 0.5,
    position: 'absolute',
    left: 0,
  },
  teamName: {
    color: 'rgba(78, 222, 163, 0.65)',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 1,
  },
  scoreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 36,
  },
  score: {
    color: '#e8e8e8',
    fontSize: 52,
    fontWeight: '300',
    letterSpacing: 4,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});