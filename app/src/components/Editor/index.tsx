import { useAppContext } from "@hooks";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Item, BtnAddItem, BtnPreview } from "@components";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
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
      <BtnPreview />
    </div>
  );
};
