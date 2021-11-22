import React, { Component } from "react";
import Counter from "./counter";

export default class Container extends Component {
  render() {
    return (
      <div className="App">
        <h1>Iphone 11</h1>
        <img src={this.props.theimage} style={{ width: 250, height: 250 }} />
        <Counter
          onChangeSum1={this.props.onChangeSum}
          onChangeSub1={this.props.onChangeSub}
        />
      </div>
    );
  }
}
