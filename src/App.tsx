import "./App.css";
import { Container } from "@mui/material";
import { TopBar } from "./components/TopBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Account } from "./pages/Account";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { useEffect, useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebase";

function App() {
  const [loading, setLoading] = useState(true); // Initialize the loading state
  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  useEffect(() => {
    setTimeout(() => {
      if (user) navigate("/home");
      else navigate("/account");
      console.log(user?.uid);
      setLoading(false);
    }, 500);
  }, [user]);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <>
      <TopBar />
      <Container sx={{ marginTop: "70px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Container>
    </>
  );
}
export default App;
