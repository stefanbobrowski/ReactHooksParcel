import React, { useState, useEffect } from "react";

const Counter = props => {
  const [count, setCount] = useState(props.count);

  useEffect(() => {
    console.log(`The count is ${count}!`);
  }, [count]);

  return (
    <div>
      <h2 className="Component-title">
        ✨ Counter with useState and useEffect Hooks ✨
      </h2>
      <div className="Counter">
        <p>The count is {count}!</p>
        <button onClick={() => setCount(count + 1)}>➕</button>
        <button onClick={() => setCount(count - 1)}>➖</button>
        <button onClick={() => setCount(props.count)}>🔄</button>
      </div>
    </div>
  );
};

export default Counter;
