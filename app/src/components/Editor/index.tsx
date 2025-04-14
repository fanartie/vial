import { useAppContext } from "@hooks";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Item, BtnAddItem } from "@components";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { ButtonGroup, Button, Box } from "@mui/material";
import "./index.css";

export const Editor = () => {
  const { items, setState }: any = useAppContext();

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
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item: any) => (
            <Item item={item} key={item.id} />
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
          {items.length > 0 && <Button>Preview</Button>}
          {items.length > 0 && <Button>Save</Button>}
        </ButtonGroup>
      </Box>
    </div>
  );
};
