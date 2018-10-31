import { useContext } from "react";
import { Context } from "./context";

export function useStore(storeKey) {
  const { state, changeState } = useContext(Context);

  const setValue = changeState(storeKey);

  return [storeKey ? state[storeKey] : state, setValue];
}
