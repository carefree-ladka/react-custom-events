import { useEffect } from "react";
import Counter from "./Counter";
import { subscribe, unsubscribe } from "./events";
import "./styles.css";

export default function App() {
  useEffect(() => {
    subscribe("countChange", function (e) {
      console.log(e.detail);
    });

    return () => unsubscribe("countChange");
  }, []);

  return (
    <div className="App">
      <h1>React Custom Events</h1>
      <Counter />
    </div>
  );
}
