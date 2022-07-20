class Heading extends React.Component {
  render() {
    const { title, className, children } = this.props;
    return React.createElement("h1", { title, className }, ...children);
  }
}

const container = document.getElementById("root");
const element = React.createElement(
  Heading,
  { title: "Title for h1", className: "heading" },
  "This is React"
);
ReactDOM.render(element, container);
