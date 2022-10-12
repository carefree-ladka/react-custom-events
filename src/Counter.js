import { useState } from "react";
import { publish } from "./events";

export default function Counter() {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount((c) => c + 1);
    publish("countChange", count);
  };

  const dec = () => setCount((c) => c - 1);

  return (
    <>
      <span>{count}</span>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
    </>
  );
}
