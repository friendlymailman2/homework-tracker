import { Box, Typography, AppBar, Toolbar, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useUserData } from "../hooks/useUserData";
import { useNavigate } from "react-router-dom";

export const TopBar = () => {
  const theme = useTheme();
  const { user } = useUserData();
  const navigate = useNavigate();

  return (
    <Container
      //disableGutters
      style={{ marginTop: theme.mixins.toolbar.minHeight }}
    >
      <AppBar>
        <Toolbar>
          <Typography
            variant="h2"
            onClick={() => navigate("/home")}
            sx={{
              transitionDuration: "0.3s",
              "&:hover": { cursor: "pointer", color: "#2f66d4" },
            }}
          >
            Homework
          </Typography>
          <Box
            component="img"
            sx={{
              marginLeft: "auto",
              width: "50px",
              height: "50px",
              borderRadius: "40px",
              "&:hover": { cursor: "pointer" },
            }}
            src={user ? user?.photoURL : require("../img/pfp.png")}
            alt="Sign In"
            onClick={() => navigate("/account")}
          />
        </Toolbar>
      </AppBar>
    </Container>
  );
};
