import { useContext } from "react";
import { InputValueContext } from "../context/InputValueContext";

function ContextComponent() {
  const { state, dispatch } = useContext(InputValueContext);
  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "SET_COUNT_TO_100" })}>
        SET Count TO 100
      </button>
    </>
  );
}

export default ContextComponent;
