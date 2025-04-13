import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./index.css";

export const Item = (props: any) => {
  const { item } = props;
  const { attributes, listeners, setNodeRef, transform, transition }: any =
    useSortable({ id: item.id });

  const style = { transition, transform: CSS.Transform.toString(transform) };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="item"
      style={style}
    >
      <label>{item.label}</label>
      <input type={item.type} placeholder={item.placeholder} />
    </div>
  );
};
