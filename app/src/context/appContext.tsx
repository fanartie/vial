import { createContext, useState } from "react";

export const AppContext = createContext({});

const defaultState = {
  items: [],
};

export const AppProvider = ({ children }: any) => {
  const [state, setState] = useState(defaultState);

  return (
    <AppContext.Provider value={{ ...state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
