import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

class SimpleMostComponent extends Component {
  render() {
    return (
      <p className="text-lg text-blue-600 font-semibold">
        This component is purely presentational 🌌
      </p>
    );
  }
}

class ComponentWithProps extends Component {
  render() {
    return (
      <p className="text-gray-700">
        It is <strong>{this.props.date.toString()}</strong>
      </p>
    );
  }
}

class CounterWithoutJSX extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prev) => ({ count: prev.count + 1 }));
  }

  render() {
    return React.createElement(
      'button',
      {
        onClick: this.handleClick,
        className: 'px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700',
      },
      `Count: ${this.state.count}`,
    );
  }
}

class CounterJSX extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prev) => ({ count: prev.count + 1 }));
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
      >
        JSX Counter: {this.state.count}
      </button>
    );
  }
}

class FetchingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { todoId: props.initialToDo, data: '' };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.todoId !== this.state.todoId) {
      this.fetchData();
    }
  }

  fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos/' + this.state.todoId)
      .then((res) => res.json())
      .then((data) => {
        this.setState((prev) => ({ ...prev, data }));
      })
      .catch((err) => console.log('Add some error handling'));
  }

  render() {
    return (
      <div className="p-4 border rounded bg-gray-100">
        <p className="font-medium">Fetched this data:</p>
        <pre className="bg-white p-2 rounded overflow-x-auto text-sm mb-3">
          {this.state.data && JSON.stringify(this.state.data, null, 2)}
        </pre>
        <button
          onClick={() =>
            this.setState((prev) => ({
              ...prev,
              todoId: Math.floor(Math.random() * 100) + 1,
            }))
          }
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
        >
          Fetch different data
        </button>
      </div>
    );
  }
}

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, type, checked, value } = event.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Submitting:\n${JSON.stringify(this.state, null, 2)}`);
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="bg-white p-4 shadow rounded"
      >
        <fieldset className="space-y-4">
          <legend className="text-lg font-bold mb-2">Reservation</legend>

          <label className="flex items-center space-x-2">
            <span>Is going:</span>
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
          </label>

          <label className="block">
            <span className="block mb-1">Number of guests:</span>
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
              className="border px-3 py-2 rounded w-full"
            />
          </label>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </fieldset>
      </form>
    );
  }
}

// Entry point to our application
function App() {
  return (
    <main className="p-6 space-y-8 max-w-3xl mx-auto">
      <SimpleMostComponent />
      <ComponentWithProps date={new Date()} />
      <CounterWithoutJSX />
      <CounterJSX />
      <FetchingComponent initialToDo={42} />
      <Reservation />
    </main>
  );
}

// Render to the DOM
createRoot(document.getElementById('root')).render(<App />);
