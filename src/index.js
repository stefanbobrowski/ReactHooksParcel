import React from "react";
import ReactDOM from "react-dom";
import MyFirstComponent from "./components/MyFirstComponent";
import Counter from "./components/Counter";
import "./styles.scss";

const App = () => {
  return (
    <div className="App">
      <MyFirstComponent />
      <Counter count={10} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
