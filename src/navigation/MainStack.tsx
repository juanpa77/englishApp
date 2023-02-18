import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import Modal from "../components/Modal";
import AddWords from "../screens/AddWords";
import Main from "../screens/Main"
import SignIn from "../screens/signIn";
import Vocabulary from "../screens/vocabulary"
import { RootStackParamList } from "../types/navigation";

const Stack = createStackNavigator<RootStackParamList>()

const MainStackScreen = () => {
  const { Navigator, Screen, Group } = Stack
  const isSignedIn = false
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Main">
        {isSignedIn
          ? <>
            <Screen name="Main" component={Main} />
            <Screen name="Vocabulary" component={Vocabulary} />
            <Group screenOptions={{ presentation: "modal" }}>
              <Screen name="Modal" component={AddWords} />
            </Group>
          </>
          : <Screen name="SignIn" component={SignIn} />
        }
      </Navigator>
    </NavigationContainer >
  )

}

export default MainStackScreen