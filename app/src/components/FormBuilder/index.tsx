import { Grid } from "@mui/material";
import { FormBuilderProvider } from "./context";

import Editor from "./Editor";
import "./index.css";

const FormBuilder = () => {
  return (
    <FormBuilderProvider>
      <Grid container spacing={2}>
        <Grid size={3}>
          <div>Sidebar</div>
        </Grid>
        <Grid size={6}>
          <Editor />
        </Grid>
        <Grid size={3}>Preview</Grid>
      </Grid>
    </FormBuilderProvider>
  );
};

export default FormBuilder;
