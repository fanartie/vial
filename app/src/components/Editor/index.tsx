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

export const Editor = () => {
  const { items, setState }: any = useAppContext();

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
          {items.length > 0 && <Button>Save</Button>}
        </ButtonGroup>
      </Box>
    </div>
  );
};
