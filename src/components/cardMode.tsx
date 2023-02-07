import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { NavigateProps, Screens } from '../types/navigation';

type Props = {
  text?: string,
  children?: JSX.Element
  screen: Screens
}

const CardMode = ({ children, text, navigation, screen }: Props & NavigateProps) => {
  const goTo = () => navigation.navigate(screen)

  return (
    <TouchableHighlight
      onPress={goTo}>
      <View style={styles.container}>
        {children}
        <Text style={styles.title}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5313D1',
    height: 100,
    borderRadius: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
export default CardMode;
