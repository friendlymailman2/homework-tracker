import { CircularProgress, Container, useTheme } from "@mui/material";

export const LoadingScreen = () => {
  const theme = useTheme();

  return (
    <Container
      disableGutters
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: theme.palette.background.default,
      }}
    >
      <CircularProgress />
    </Container>
  );
};
