import { Grid } from "@mui/material";
import { Editor } from "@components";

export const FormBuilder = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={3}>
          <div>Sidebar</div>
        </Grid>
        <Grid size={6}>
          <Editor />
        </Grid>
        <Grid size={3}>Preview</Grid>
      </Grid>
    </div>
  );
};
