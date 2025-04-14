import { Grid, Box, Paper } from "@mui/material";
import { Editor, Preview } from "@components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppContext } from "@hooks";

export const FormBuilder = () => {
  const { formId } = useParams();
  const { setState }: any = useAppContext();
  useEffect(() => {
    if (formId === "new") {
      setState((prevState: any) => ({
        ...prevState,
        formId: "new",
      }));
    }
  }, [formId]);

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
