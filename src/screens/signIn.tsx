import { Button, Text, View } from "react-native"
import { signInWithGoogle } from "../services/firebase/authProvider"

const SignIn = () => {
  return (
    <View>
      <Text>Sign In with google</Text>
      <Button
        onPress={() => signInWithGoogle()}
        title="login"
      />
    </View>
  )
}

export default SignIn