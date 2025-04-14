import { Box, Stack, Typography, Button, ButtonGroup } from "@mui/material";
export const Home = () => {
  return (
    <Box
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography variant="h4">Vial</Typography>
        <Typography variant="h4">Welcome</Typography>

        <ButtonGroup variant="text" aria-label="Basic button group">
          <Button
            onClick={() => {
              window.location.href = "/forms";
            }}
          >
            All Forms
          </Button>
        </ButtonGroup>
      </Stack>
    </Box>
  );
};
