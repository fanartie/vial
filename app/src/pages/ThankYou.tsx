import { Box, Stack, Typography, Button, ButtonGroup } from "@mui/material";
import { useParams } from "react-router-dom";
export const ThankYou = () => {
  const { formId } = useParams();
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
        <Typography variant="h4">Thank You for your submission!</Typography>
        <Typography variant="h4">Vial</Typography>

        <ButtonGroup variant="text" aria-label="Basic button group">
          <Button
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Home
          </Button>
          <Button
            onClick={() => {
              window.location.href = "/form-builder/" + formId;
            }}
          >
            Edit
          </Button>
          <Button
            onClick={() => {
              window.location.href = "/form-fill/" + formId;
            }}
          >
            Fill
          </Button>
          <Button
            onClick={() => {
              window.location.href = "/submission/" + formId;
            }}
          >
            Submission
          </Button>
        </ButtonGroup>
      </Stack>
    </Box>
  );
};
