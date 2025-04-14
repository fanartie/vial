import { useAppContext } from "@hooks";
import { enum_ItemType } from "@types";
import { Text, Number } from "@fields";
import { Typography } from "@mui/material";

export const Preview = () => {
  const { items }: any = useAppContext();
  if (items.length === 0) {
    return <Typography>No items to preview</Typography>;
  }
  return (
    <div>
      <Typography>Preview</Typography>
      <div>
        {items.map((item: any) => {
          const key = ["preview", item.id].join(".");
          switch (item.type) {
            case enum_ItemType.TEXT:
              return <Text key={key} item={item} />;
            case enum_ItemType.NUMBER:
              return <Number key={key} item={item} />;
            case "divider":
              return <hr key={key} />;
            default:
              return <Typography key={key}>invalid type</Typography>;
          }
        })}
      </div>
    </div>
  );
};
