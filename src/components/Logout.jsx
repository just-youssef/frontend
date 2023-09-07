import { signOut } from "firebase/auth";
import { auth,  } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const Logout = async () => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      signOut(auth);
      console.log("logout");
    }
  });

};

export default Logout