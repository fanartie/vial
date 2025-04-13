import { useContext } from "react";
import { AppContext } from "@context";

export const useAppContext = () => {
  return useContext(AppContext); // it returns {...state, setState}
};
