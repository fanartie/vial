import { Box, Paper } from "@mui/material";
import { Preview } from "@components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppContext, useFormData } from "@hooks";

export const FormFill = () => {
  const { formId } = useParams();
  const { form, isLoading } = useFormData({
    id: formId,
  });
  const { setState }: any = useAppContext();

  useEffect(() => {
    if (form) {
      const { fields } = form;
      const items = Object.keys(fields).map((key) => ({
        id: key,
        fieldName: key,
        question: fields[key].question,
        type: fields[key].type,
        placeholder: fields[key].placeholder,
        required: fields[key].required,
        min: fields[key].min,
        max: fields[key].max,
        helperText: fields[key].helperText,
      }));
      setState((prevState: any) => ({
        ...prevState,
        items,
        formId: form.id,
        formName: form.name,
      }));
    }
  }, [form]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper style={{ padding: "16px", textAlign: "center", width: "600px" }}>
        <Preview action="fill" />
      </Paper>
    </Box>
  );
};
