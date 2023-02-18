import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const provider = new GoogleAuthProvider()
const auth = getAuth();

export const signInWithGoogle = () => {
  return signInWithRedirect(auth, provider);
}