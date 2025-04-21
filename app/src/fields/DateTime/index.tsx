import { Box } from "@mui/material";
import { useAppContext } from "@hooks";

// This component is used to render a date and time field in the form
export const DateTime = (props: any) => {
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
      <input
        type="date"
        defaultValue={item.value}
        placeholder={item.placeholder}
        required={item.required}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onEntry(item.id, e.target.value)
        }
      />
    </Box>
  );
};
