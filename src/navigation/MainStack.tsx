import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import Main from "../screens/Main"
import Vocabulary from "../screens/vocabulary"
import { RootStackParamList } from "../types/navigations";

const Stack = createStackNavigator<RootStackParamList>()

const MainStack = () => {
  const { Navigator, Screen } = Stack

  return (
    <NavigationContainer>
      <Navigator initialRouteName="Main">
        <Screen
          name="Main"
          component={Main}
        />
        <Screen
          name="Vocabulary"
          component={Vocabulary}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default MainStack