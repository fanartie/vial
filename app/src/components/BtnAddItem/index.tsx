import { IconButton, Box, Icon } from "@mui/material";
import { useAppContext } from "@hooks";
import { v4 as uuidv4 } from "uuid";
import { enum_ItemType } from "@types";

// this component is used to add a new item to the form
export const BtnAddItem = () => {
  const { setState }: any = useAppContext();

  const onClick = () => {
    setState((prevState: any) => {
      const newItem = {
        id: uuidv4(),
        question: "Question",
        type: enum_ItemType.TEXT,
        placeholder: "",
        required: false,
      };
      return {
        ...prevState,
        items: [...prevState.items, newItem],
      };
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton onClick={onClick} color="primary" size="large">
        <Icon baseClassName="fas" className="fa-plus-circle" />
      </IconButton>
    </Box>
  );
};
