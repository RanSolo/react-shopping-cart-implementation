import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrementIncrease = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleIncrementDecrease = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div className="container">
        <button
          onClick={this.handleIncrementDecrease}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrementIncrease}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          X
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
