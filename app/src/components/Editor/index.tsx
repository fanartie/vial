import { useAppContext } from "@hooks";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { ItemConfig, BtnAddItem } from "@components";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { ButtonGroup, Button, Box, TextField } from "@mui/material";
import "./index.css";
import { postForm, patchForm } from "@api";

// This component is used to edit the form configuration
export const Editor = () => {
  const { items, formId, formName, setState }: any = useAppContext();

  console.log("items", items);

  const getItemPos = (id: any) =>
    items.findIndex((item: any) => item.id === id);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setState((prevState: any) => {
      const originalPos = getItemPos(active.id);
      const newPos = getItemPos(over.id);

      return {
        ...prevState,
        items: arrayMove(prevState.items, originalPos, newPos),
      };
    });
  };

  const onBack = () => {
    window.location.href = "/home";
  };

  const onSave = async () => {
    let fields: any = {};
    items.forEach((item: any, index: number) => {
      let fieldName = item.fieldName || "";
      if (fieldName === "") {
        fieldName = `field-${index + 1}`; // default field name, ex: field-1, in case user forget to set
      }

      fields[fieldName] = {
        index: index + 1, // this is used to sort the fields in the form, to keep the order
        question: item.question,
        type: item.type,
        placeholder: item.placeholder,
        required: item.required,
        min: item.min,
        max: item.max,
        helperText: item.helperText,
      };
    });
    const payload: any = {
      name: formName || "New Form",
      fields,
    };

    if (formId === "new") {
      await postForm(payload);
    } else {
      await patchForm(formId, payload);
    }
    window.location.href = "/home";
  };

  return (
    <div className="column">
      <TextField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState((prevState: any) => ({
            ...prevState,
            formName: e.target.value,
          }))
        }
        required
        label="Form Name"
        defaultValue="New Form"
        helperText="Enter the name of the form"
        variant="standard"
        placeholder="My Form"
        style={{ width: "200px" }}
      />
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item: any) => (
            <ItemConfig item={item} key={["itemConfig", item.id].join(".")} />
          ))}
        </SortableContext>
      </DndContext>
      <BtnAddItem />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ButtonGroup variant="text" aria-label="Basic button group">
          <Button onClick={onBack}>Back</Button>
          {items.length > 0 && <Button onClick={onSave}>Save</Button>}
        </ButtonGroup>
      </Box>
    </div>
  );
};
