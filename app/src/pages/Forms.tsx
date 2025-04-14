import { FormList } from "@components";
import { Typography, Box, ButtonGroup, Button } from "@mui/material";
export const Forms = () => {
  return (
    <div>
      <Typography>Form List</Typography>
      <FormList />
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
