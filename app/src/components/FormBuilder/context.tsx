import { createContext, useContext, useState } from "react";

export const FormBuilderContext = createContext({});

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

export const FormBuilderProvider = ({ children }: any) => {
  const [state, setState] = useState(defaultState);

  return (
    <FormBuilderContext.Provider value={{ ...state, setState }}>
      {children}
    </FormBuilderContext.Provider>
  );
};

export const useFormBuilderContext = () => {
  return useContext(FormBuilderContext); // it returns {...state, setState}
};
