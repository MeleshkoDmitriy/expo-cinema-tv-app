import { use } from "react";
import { MenuContext, MenuContextValue } from "../context";

export const useMenu = (): MenuContextValue => {
  const context = use(MenuContext);

  if (context === null) throw new Error("useMenu must be used within MenuContextProvider");

  return context;
}