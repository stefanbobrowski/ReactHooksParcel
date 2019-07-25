import React from "react";
import MyFirstComponent from "./components/MyFirstComponent";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div className="App">
      <MyFirstComponent />
      <Counter count={10} />
    </div>
  );
};

export default App;
