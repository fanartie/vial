import { Grid, Box, Paper } from "@mui/material";
import { Editor, Preview } from "@components";

export const FormBuilder = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2} style={{ width: "100%" }}>
        <Grid size={6}>
          <Paper style={{ padding: "16px", textAlign: "center" }}>
            <Preview />
          </Paper>
        </Grid>
        <Grid size={6}>
          <Paper style={{ padding: "16px", textAlign: "center" }}>
            <Editor />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
