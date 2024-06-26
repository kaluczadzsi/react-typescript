import { Component } from 'react';

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        <div>
          {this.props.message} {this.state.count}
        </div>
      </div>
    );
  }
}

export default Counter;
