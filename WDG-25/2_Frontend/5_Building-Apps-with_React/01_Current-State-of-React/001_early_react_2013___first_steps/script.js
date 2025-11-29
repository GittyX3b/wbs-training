var Hello = React.createClass({
  render: function () {
    return <h1>Hello {this.props.name}</h1>;
  },
});

var TextBoxList = React.createClass({
  getInitialState: function () {
    return { count: 1 };
  },
  add: function () {
    this.setState({ count: this.state.count + 1 });
  },
  render: function () {
    var items = [];
    for (var i = 0; i < this.state.count; i++) {
      items.push(
        <li key={i}>
          <input type="text" placeholder="change me!" className="border" />
        </li>
      );
    }
    return (
      <div>
        <ul>{items}</ul>
        <button onClick={this.add} className="bg-blue-300 px-4 py-1 rounded">
          Add an item
        </button>
      </div>
    );
  },
});

var FunctionalComponent = function (props) {
  var answer = 13 + 29;
  return (
    <div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <p>Computed answer: {answer}</p>
    </div>
  );
};

var App = function () {
  return (
    <div>
      <Hello name="World" />
      <TextBoxList />
      <FunctionalComponent hello="World" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
