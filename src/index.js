import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

// React is loaded and is available as React and ReactDOM
// imports should NOT be used

// const countReducer = function (state = 0, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// };

// class FocusableInput extends React.Component {
//   // ref = React.createRef();
//   render() {
//     const { count, handleDecrementClick, handleIncrementClick } = this.props;
//     return (
//       <div>
//         <h1>Helloworld React & Redux! {count}</h1>
//         <button onClick={handleDecrementClick}>Decrement</button>
//         <button onClick={handleIncrementClick}>Increment</button>
//       </div>
//     );
//   }
// }

// // FocusableInput.defaultProps = {
// //   focused: false
// // };

// const mapStateToProps = state => {
//   return {
//     count: state
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
//     handleDecrementClick: () => dispatch({ type: 'DECREMENT' })
//   };
// };

// let store = createStore(countReducer, composeWithDevTools());

// const Container = connect(mapStateToProps, mapDispatchToProps)(FocusableInput);

// const App = () => (
//   <Provider store={store}>
//     <Container />
//   </Provider>
// );

// document.body.innerHTML = "<div id='root'></div>";
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

const OPERATIONS = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT'
};

function App() {
  const [number, updateNumber] = React.useState(0);

  const [state, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case 'ADD':
        return state + number;
      case 'SUBTRACT':
        return state - number;
      default:
        return state;
    }
  }, 0);

  /* implement dispatches */
  const add = () => dispatch({ type: 'ADD' });
  const subtract = () => dispatch({ type: 'SUBTRACT' });

  const handleNumberChange = e => updateNumber(Number(e.target.value));

  return (
    <div>
      <div id="result">{state}</div>
      <div>
        <button id="add" onClick={add}>
          Add
        </button>
        <button id="subtract" onClick={subtract}>
          Subtract
        </button>
      </div>
      <div>
        <input type="text" value={number} onChange={handleNumberChange} />
      </div>
    </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
