import React, { Component } from "react";

type CounterProps = {
  message: string
}

type CounterState = {
  count: number
}

export class ClassCounter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        <div>{this.state.count}</div>
        <div>{this.props.message}</div>
      </div>
    );
  }
}

export default ClassCounter;
