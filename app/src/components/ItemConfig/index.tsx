import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Box,
  IconButton,
  TextField,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  DragIndicator as DragHandleIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { useAppContext } from "@hooks";
import { enum_ItemType } from "@types";

export const ItemConfig = (props: any) => {
  const { setState }: any = useAppContext();
  const [expanded, setExpanded] = useState(false);

  const { item } = props;
  const { attributes, listeners, setNodeRef, transform, transition }: any =
    useSortable({ id: item.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    padding: "0px",
  };

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

  const itemTypes = Object.values(enum_ItemType);
  const itemTypeOptions = itemTypes.map((type) => ({
    value: type,
    label: type.charAt(0).toUpperCase() + type.slice(1),
  }));

  const handleChange = (event: React.MouseEvent) => {
    event.stopPropagation(); // prevent summary row toggle
    setExpanded((prev) => !prev);
  };

  const onEntry = (itemId: string, propertyName: string, value: any) => {
    setState((prevState: any) => {
      const newItems = prevState.items.map((i: any) => {
        if (i.id === itemId) {
          return {
            ...i,
            [propertyName]: value,
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
      ref={setNodeRef}
      style={style}
    >
      <IconButton onClick={onDelete} aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <Accordion
        elevation={0}
        expanded={expanded}
        onChange={() => {}} // override default behavior
        style={{ width: "100%" }}
      >
        <AccordionSummary
          onClick={(e) => e.stopPropagation()} // prevent toggle on row
          onFocus={(e) => e.stopPropagation()} // prevent toggle on keyboard focus
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Box display="flex" alignItems="center" gap={2} flexGrow={1}>
            <TextField
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onEntry(item.id, "type", e.target.value)
              }
              required
              select
              label="Type"
              defaultValue={enum_ItemType.TEXT}
              variant="standard"
              style={{ width: "100px" }}
            >
              {itemTypeOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onEntry(item.id, "label", e.target.value)
              }
              label="Label"
              defaultValue={item.label}
              variant="standard"
              style={{ width: "140px" }}
            />
          </Box>
          <div onClick={handleChange}>
            <ExpandMoreIcon />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" alignItems="center" gap={2} flexGrow={1}>
            <FormControlLabel
              control={
                <Checkbox
                  defaultValue={item.required}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onEntry(item.id, "required", e.target.checked)
                  }
                />
              }
              label="Required"
            />
            <TextField
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onEntry(item.id, "placeholder", e.target.value)
              }
              label="Placeholder"
              defaultValue={item.placeholder}
              placeholder="Placeholder"
              variant="standard"
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <IconButton {...attributes} {...listeners}>
        <DragHandleIcon />
      </IconButton>
    </Box>
  );
};
