import { FormList } from "@components";
import { Typography, Box, ButtonGroup, Button } from "@mui/material";

// This component is used to display the list of forms
export const Forms = () => {
  return (
    <div>
      <Typography>Form List</Typography>
      <FormList />
      {/* This component will fetch and display the list of forms */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ButtonGroup variant="text" aria-label="Basic button group">
          <Button
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Home
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
};
