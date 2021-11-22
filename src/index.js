import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";

class Index extends React.Component {
  render() {
    return <App />;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
