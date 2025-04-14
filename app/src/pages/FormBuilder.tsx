import { Grid, Box, Paper } from "@mui/material";
import { Editor, Preview } from "@components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppContext, useFormData } from "@hooks";
import _ from "lodash";

export const FormBuilder = () => {
  const { formId } = useParams();
  const { form, isLoading } = useFormData({
    id: formId,
    enabled: formId !== "new",
  });
  const { setState }: any = useAppContext();

  useEffect(() => {
    if (formId === "new") {
      setState((prevState: any) => ({
        ...prevState,
        formId: "new",
      }));
    }
  }, [formId]);

  useEffect(() => {
    if (form) {
      const { fields } = form;
      const items = Object.keys(fields).map((key) => ({
        id: key,
        index: fields[key].index,
        fieldName: key,
        question: fields[key].question,
        type: fields[key].type,
        placeholder: fields[key].placeholder,
        required: fields[key].required,
        min: fields[key].min,
        max: fields[key].max,
        helperText: fields[key].helperText,
      }));

      const sortedItems = _.sortBy(items, ["index"]);
      setState((prevState: any) => ({
        ...prevState,
        items: sortedItems,
        formId: form.id,
        formName: form.name,
      }));
    }
  }, [form]);

  if (formId !== "new" && isLoading) {
    return <div>Loading...</div>;
  }

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
