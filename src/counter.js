import React from "react";
import "./styles.css";
class Counter extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
    this.props.onChangeSum1();
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
      this.props.onChangeSub1();
    }
  };

  render() {
    return (
      <div className="button">
        <p>Quantity:{this.state.count}</p>
        <button onClick={this.increment}>+</button>

        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
export default Counter;
