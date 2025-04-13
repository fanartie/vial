import { useState } from "react";

const useFormBuilder = () => {
  const [layoutItems, setLayoutItems]: any = useState([]);
  const [selectedControl, setSelectedControl]: any = useState(undefined);

  const addItem = (item: any) => {
    console.log("layoutItems", layoutItems);
    console.log("addItem", item);
    const newItems = [...layoutItems, item];
    console.log("newItems", newItems);
    setLayoutItems(newItems);
  };

  const selectControl = (item: any) => {
    setSelectedControl(item);
  };

  return {
    layoutItems,
    addItem,
    selectControl,
    selectedControl,
  };
};

export default useFormBuilder;
