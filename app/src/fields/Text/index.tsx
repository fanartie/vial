import { useAppContext } from "@hooks";
import { Box, TextField } from "@mui/material";

// This component is used to render a text field in the form
export const Text = (props: any) => {
  const { item } = props;

  const { setState }: any = useAppContext();

  const onEntry = (itemId: string, value: any) => {
    setState((prevState: any) => {
      const newItems = prevState.items.map((i: any) => {
        if (i.id === itemId) {
          return {
            ...i,
            value: value,
          };
        }
        return i;
      });
      return {
        ...prevState,
        items: newItems,
      };
    });
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onEntry(item.id, e.target.value)
        }
        label={item.question}
        defaultValue={item.value}
        placeholder={item.placeholder}
        required={item.required}
        helperText={item.helperText}
        variant="standard"
      />
    </Box>
  );
};
