import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function Hello() {
  function hiFn() {
    console.log("created");
    return byeFn();
  }
  function byeFn() {
    console.log("bye~");
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev); // prev는 state의 이전 값
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
