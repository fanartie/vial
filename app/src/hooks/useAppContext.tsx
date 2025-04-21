import { useContext } from "react";
import { AppContext } from "@context";

// This hook provides access to the AppContext
export const useAppContext = () => {
  return useContext(AppContext); // it returns {...state, setState}
};
