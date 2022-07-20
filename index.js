class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    if (this.state.count <= 0) {
      return;
    }
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { count } = this.state;
    return React.createElement(
      React.Fragment,
      null,
      React.createElement("h2", null, count),
      React.createElement("button", { onClick: this.increment }, "+"),
      React.createElement("button", { onClick: this.decrement }, "-")
    );
  }
}

const container = document.getElementById("root");
const element = React.createElement(Counter);
ReactDOM.render(element, container);
