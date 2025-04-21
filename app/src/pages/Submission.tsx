import { SourceRecordList } from "@components";
import { Typography, Button, ButtonGroup, Box } from "@mui/material";

// This component is used to display the submission page
export const Submission = () => {
  return (
    <div>
      <Typography>Source Record List</Typography>
      <SourceRecordList />
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
              window.location.href = "/forms";
            }}
          >
            All Forms
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
};
