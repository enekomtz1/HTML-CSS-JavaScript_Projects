import { useState } from "react";

import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <div className="count-container">
        <h1>{count}</h1>
      </div>

      <section className="btns-container">
        <button onClick={decrement} className="btn">
          -
        </button>

        <button onClick={increment} className="btn">
          +
        </button>
      </section>
    </>
  );
}

export default Counter;
