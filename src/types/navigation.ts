import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
  Main: undefined
  Vocabulary: undefined
  lessons: undefined
  Modal: undefined
  SignIn: undefined
}

export type Screens = keyof RootStackParamList

export type NavigateProps = NativeStackScreenProps<RootStackParamList>