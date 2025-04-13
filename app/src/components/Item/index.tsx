import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box, IconButton, Typography } from "@mui/material";
import {
  Delete as DeleteIcon,
  DragIndicator as DragHandleIcon,
} from "@mui/icons-material";
import "./index.css";
import { useAppContext } from "@hooks";

export const Item = (props: any) => {
  const { setState }: any = useAppContext();
  const { item } = props;
  const { attributes, listeners, setNodeRef, transform, transition }: any =
    useSortable({ id: item.id });

  const style = { transition, transform: CSS.Transform.toString(transform) };

  const onDelete = () => {
    console.log("delete", item);
    setState((prevState: any) => {
      const newItems = prevState.items.filter((i: any) => i.id !== item.id);
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
      boxShadow={1}
      ref={setNodeRef}
      className="item"
      style={style}
    >
      <IconButton onClick={onDelete} aria-label="delete">
        <DeleteIcon />
      </IconButton>

      <Box display="flex" alignItems="center" gap={2} flexGrow={1}>
        <Typography variant="h6">{item.label}</Typography>
        <input type={item.type} placeholder={item.placeholder} />
      </Box>
      <IconButton {...attributes} {...listeners}>
        <DragHandleIcon />
      </IconButton>
    </Box>
  );
};
