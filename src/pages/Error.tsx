import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";

export const Error = () => {
  useEffect(() => {
    document.title = "404 Error";
  }, []);
  return (
    <Container sx={{ textAlign: "center" }}>
      <Box
        component="img"
        src={require("../img/404Ant.png")}
        alt="404 Ant"
        sx={{ width: "1000px", height: "390px" }}
      />
      <Typography variant="h1">404 Ant couldnt find the page</Typography>
    </Container>
  );
};
