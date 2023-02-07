import { StyleSheet, Text, View } from 'react-native';
import CardMode from '../components/cardMode';
import { NavigateProps } from '../types/navigation';

const Main = ({ route, navigation }: NavigateProps) => {
  console.log(navigation.navigate)
  return (
    <View style={styles.sectionContainer}>
      <CardMode
        text='Vocabulary'
        screen='Vocabulary'
        navigation={navigation}
        route={route}
      />
      <CardMode
        text='Lessons'
        screen='lessons'
        navigation={navigation}
        route={route}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    justifyContent: 'flex-start',
    height: '100%',
    marginTop: 32,
    paddingHorizontal: 24,
    gap: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Main;
