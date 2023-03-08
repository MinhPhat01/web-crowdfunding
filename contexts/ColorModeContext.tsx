import { createContext, useContext } from "react";

const defaultState = {
  toggleColorMode: () => {},
};

export const ColorModeContext = createContext(defaultState);

export const useColorMode = () => useContext(ColorModeContext);
