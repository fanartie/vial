import { createContext, useContext, useState } from "react";

export const FormBuilderContext = createContext({});

const defaultState = {
  layoutItems: [],
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
