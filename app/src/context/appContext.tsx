import { createContext, useState } from "react";

export const AppContext = createContext({});

const defaultState = {
  items: [
    {
      id: 2,
      label: "Text2",
      type: "text",
      value: "",
      placeholder: "Enter text",
    },
    {
      id: 1,
      label: "Text1",
      type: "text",
      value: "",
      placeholder: "Enter text",
    },

    {
      id: 3,
      label: "Text3",
      type: "text",
      value: "",
      placeholder: "Enter text",
    },
    {
      id: 4,
      label: "Text4",
      type: "text",
      value: "",
      placeholder: "Enter text",
    },
  ],
};

export const AppProvider = ({ children }: any) => {
  const [state, setState] = useState(defaultState);

  return (
    <AppContext.Provider value={{ ...state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
