import { Container, Typography, Box, Button, useTheme } from "@mui/material";
import { useEffect } from "react";
import GoogleButton from "react-google-button";
import { auth, signInWithGoogle } from "../config/firebase";
import { useUserData } from "../hooks/useUserData";
export const Account = () => {
  const { user } = useUserData();
  const theme = useTheme();
  useEffect(() => {
    document.title = "Account";
  }, []);
  return (
    <Container
      sx={{
        display: "grid",
        justifyContent: "center",
        bgcolor: theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "auto",
        }}
      >
        <Typography variant="h1" sx={{ color: "white" }}>
          Account
        </Typography>
      </Box>
      {user ? (
        <Button
          variant="contained"
          onClick={() => {
            auth.signOut();
            window.location.reload();
          }}
          sx={{
            width: "230px",
            height: "50px",
            fontSize: "1rem",
            margin: "10px",
          }}
        >
          SIGN OUT
        </Button>
      ) : (
        <GoogleButton
          type="dark"
          onClick={signInWithGoogle}
          style={{ margin: "10px" }}
        />
      )}
    </Container>
  );
};
