import React, { createContext, SetStateAction, useReducer } from "react";

const initialState = {
  count: 0,
};

type AppState = typeof initialState;
type Action =
  | { type: "SET_COUNT"; payload: number }
  | { type: "SET_COUNT_TO_100" };

interface IChildren {
  children: React.ReactNode;
}

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "SET_COUNT":
      return {
        ...state,
        count: action.payload,
      };
    case "SET_COUNT_TO_100":
      return {
        ...state,
        count: 100,
      };
    default:
      return state;
  }
};

const InputValueContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

function InputValueProvider({ children }: IChildren) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <InputValueContext.Provider value={{ state, dispatch }}>
      {children}
    </InputValueContext.Provider>
  );
}

export { InputValueContext, InputValueProvider };
