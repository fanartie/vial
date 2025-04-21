import { useAppContext } from "@hooks";
import { Box, FormControlLabel, Switch } from "@mui/material";

// This component is used to render a boolean field in the form
export const Boolean = (props: any) => {
  const { item } = props;

  const { setState }: any = useAppContext();

  const onEntry = (itemId: string, value: any) => {
    setState((prevState: any) => {
      const newItems = prevState.items.map((i: any) => {
        if (i.id === itemId) {
          return {
            ...i,
            value: value || false,
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
      <FormControlLabel
        required={item.required}
        control={
          <Switch
            // checked={item.value || false}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onEntry(item.id, e.target.checked)
            }
          />
        }
        label={item.question}
      />
    </Box>
  );
};
