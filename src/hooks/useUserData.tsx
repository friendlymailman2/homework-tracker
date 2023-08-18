import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export const useUserData = () => {
  const [user] = useAuthState(auth);
  const name = user?.displayName;
  const email = user?.email;
  const pfp = user?.photoURL;
  const navigate = useNavigate();

  return { user, name, email, pfp };
};
