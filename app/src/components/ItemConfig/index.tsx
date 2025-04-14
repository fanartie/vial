import { useState, useMemo } from "react";
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
  ExpandLess as ExpandLessIcon,
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

  const onEntry = (propertyName: string, value: any) => {
    setState((prevState: any) => {
      const newItems = prevState.items.map((i: any) => {
        if (i.id === item.id) {
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

  const BasicInfo = useMemo(() => {
    return (
      <Box display="flex" alignItems="center" gap={2} flexGrow={1}>
        <TextField
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onEntry("type", e.target.value)
          }
          required
          select
          label="Type"
          defaultValue={item.type}
          variant="standard"
          style={{ width: "140px" }}
        >
          {itemTypeOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onEntry("fieldName", e.target.value)
          }
          required
          label="Field Name"
          defaultValue={item.fieldName}
          variant="standard"
          style={{ width: "140px" }}
        />
      </Box>
    );
  }, [item.type, item.fieldName]);

  const Question = useMemo(() => {
    return (
      <>
        <Box display="flex" alignItems="center" gap={2} flexGrow={1}>
          <TextField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onEntry("question", e.target.value)
            }
            required
            label="Question"
            defaultValue={item.question}
            variant="standard"
            style={{ width: "80%" }}
          />
        </Box>
        <Box display="flex" alignItems="center" gap={2} flexGrow={1}>
          <TextField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onEntry("helperText", e.target.value)
            }
            label="Helper Text"
            defaultValue={item.helperText}
            variant="standard"
            style={{ width: "80%" }}
          />
        </Box>
      </>
    );
  }, [item.question, item.helper]);

  const AdditionalInfo1 = useMemo(() => {
    return (
      <>
        <Box display="flex" alignItems="center" gap={2} flexGrow={1}>
          <TextField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onEntry("placeholder", e.target.value)
            }
            label="Placeholder"
            defaultValue={item.placeholder}
            placeholder="Placeholder"
            variant="standard"
            style={{ width: "80%" }}
          />
        </Box>
        <Box display="flex" alignItems="center" gap={2} flexGrow={1}>
          <FormControlLabel
            control={
              <Checkbox
                defaultValue={item.required}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onEntry("required", e.target.checked)
                }
              />
            }
            label="Required"
          />
        </Box>
      </>
    );
  }, [item.required, item.placeholder]);

  const NumberRange = useMemo(() => {
    return (
      <Box display="flex" alignItems="center" gap={2} flexGrow={1}>
        <TextField
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onEntry("min", e.target.value)
          }
          label="Min"
          type="number"
          defaultValue={item.min}
          variant="standard"
          style={{ width: "140px" }}
        />
        <TextField
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onEntry("max", e.target.value)
          }
          label="Max"
          type="number"
          defaultValue={item.max}
          variant="standard"
          style={{ width: "140px" }}
        />
      </Box>
    );
  }, [item.min, item.max]);

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
          {BasicInfo}

          <div onClick={handleChange}>
            {expanded && <ExpandLessIcon />}
            {!expanded && <ExpandMoreIcon />}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {Question}
          {AdditionalInfo1}
          {item.type === enum_ItemType.NUMBER && NumberRange}
        </AccordionDetails>
      </Accordion>
      <IconButton {...attributes} {...listeners}>
        <DragHandleIcon />
      </IconButton>
    </Box>
  );
};
