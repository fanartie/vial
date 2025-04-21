import { useAppContext } from "@hooks";
import { enum_ItemType } from "@types";
import { Text, Number, DateTime, Boolean } from "@fields";
import { Typography, Button } from "@mui/material";
import { postSourceRecord } from "@api";

// This component is used to preview the form and submit the data
export const Preview = (param: any) => {
  const { action } = param;
  const { items, formName, formId }: any = useAppContext();
  if (items.length === 0) {
    if (action === "fill") {
      return <Typography>No items to fill</Typography>;
    } else {
      return <Typography>No items to preview</Typography>;
    }
  }
  if (action === "fill") {
    console.log("items", items);
  }

  const onSubmit = () => {
    const sourceData: any = [];
    items.forEach((item: any) => {
      const { question, value } = item;
      sourceData.push({
        question,
        answer: value || "",
      });
    });
    const payload = {
      formId,
      sourceData,
    };
    console.log("onSubmit", payload);
    postSourceRecord(payload)
      .then((res) => {
        console.log("success", res);
        window.location.href = "/thank-you/" + formId; // redirect to thank you page
      })
      .catch((err) => {
        console.error("error", err);
      });
  };

  return (
    <div>
      {action !== "fill" && <Typography>PREVIEW</Typography>}
      <Typography>{formName}</Typography>
      <div>
        {items.map((item: any) => {
          const key = ["preview", item.id].join(".");
          switch (item.type) {
            case enum_ItemType.TEXT:
              return <Text key={key} item={item} />;
            case enum_ItemType.NUMBER:
              return <Number key={key} item={item} />;
            case enum_ItemType.DATETIME:
              return <DateTime key={key} item={item} />;
            case enum_ItemType.BOOLEAN:
              return <Boolean key={key} item={item} />;
            default:
              return <Typography key={key}>invalid type</Typography>;
          }
        })}
      </div>
      {action === "fill" && (
        <Button onClick={onSubmit} variant="contained">
          Submit
        </Button>
      )}
    </div>
  );
};
