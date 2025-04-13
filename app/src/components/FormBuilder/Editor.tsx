import { useFormBuilderContext } from "./context";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Item from "./Item";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

const Editor = () => {
  const { items, setState }: any = useFormBuilderContext();

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
    </div>
  );
};
export default Editor;
