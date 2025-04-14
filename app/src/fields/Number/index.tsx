import { Box, TextField } from "@mui/material";
import { useState } from "react";
export const Number = (props: any) => {
  const { item } = props;
  const [value, setValue] = useState<number>(item.value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: number = parseFloat(event.target.value);
    if (newValue >= parseFloat(item.min) && newValue <= parseFloat(item.max)) {
      setValue(newValue);
    }
  };

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
        onChange={handleChange}
        type="number"
        label={item.question}
        defaultValue={value}
        placeholder={item.placeholder}
        required={item.required}
        helperText={item.helperText}
        variant="standard"
      />
    </Box>
  );
};
