import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import Modal from "../components/Modal";
import AddWords from "../screens/AddWords";
import Main from "../screens/Main"
import Vocabulary from "../screens/vocabulary"
import { RootStackParamList } from "../types/navigation";

const Stack = createStackNavigator<RootStackParamList>()

const MainStackScreen = () => {
  const { Navigator, Screen, Group } = Stack

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
        <Group screenOptions={{ presentation: "modal" }}>
          <Screen name="Modal" component={AddWords} />
        </Group>
      </Navigator>
    </NavigationContainer>
  )
}

export default MainStackScreen