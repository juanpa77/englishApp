import { StyleSheet, Text, TextInput, View } from "react-native"
import Modal from "../components/Modal"
import { NavigateProps } from "../types/navigation"

const AddWords = ({ navigation, route }: NavigateProps) => {
  return (
    <Modal navigation={navigation} route={route}>
      <View>
        <Text>test</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '80%'
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})

export default AddWords