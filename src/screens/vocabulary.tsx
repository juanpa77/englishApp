import { Text, View } from "react-native"
import CardMode from "../components/cardMode"
import { NavigateProps } from "../types/navigation"

const Vocabulary = ({ navigation, route }: NavigateProps) => {

  return (
    <View>
      <CardMode
        navigation={navigation}
        screen="Modal"
        route={route}
        text='add new words'
      />
    </View>
  )
}

export default Vocabulary