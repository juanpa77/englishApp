import { Button, View, StyleSheet, Text } from "react-native"
import { NavigateProps } from "../types/navigation"

type Props = {
  children: JSX.Element
}

const Modal = ({ navigation, children }: NavigateProps & Props) => {

  return (
    <View style={styles.container}>
      {children}
      <Button onPress={() => { navigation.goBack() }} title='Dismiss' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Modal