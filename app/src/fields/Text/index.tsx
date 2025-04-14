import { Box, TextField } from "@mui/material";
export const Text = (props: any) => {
  const { item } = props;
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="white"
      p={2}
      borderRadius={2}
    >
      <TextField
        // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        //   onEntry(item.id, "placeholder", e.target.value)
        // }
        label={item.label}
        defaultValue={item.value}
        placeholder={item.placeholder}
        required={item.required}
        variant="standard"
      />
    </Box>
  );
};
