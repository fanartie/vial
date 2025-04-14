import { useAppContext } from "@hooks";
export const Preview = () => {
  const { items }: any = useAppContext();
  if (items.length === 0) {
    return <div>No items to preview</div>;
  }
  return (
    <div>
      <h2>Preview</h2>
      <div>
        {items.map((item: any, index: number) => {
          const key = ["preview", item.id].join(".");
          switch (item.type) {
            case "text":
              return <p key={key}>{item.content}</p>;
            case "image":
              return <img key={key} src={item.src} alt="Item" />;
            case "divider":
              return <hr key={key} />;
            default:
              return <div key={key}>invalid type</div>;
          }
        })}
      </div>
    </div>
  );
};
