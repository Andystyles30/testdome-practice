import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  // ref = React.createRef();
  render() {
    const { count, handleDecrementClick, handleIncrementClick } = this.props;
    return (
      <div>
        <h1>Helloworld React & Redux! {count}</h1>
        <button onClick={handleDecrementClick}>Decrement</button>
        <button onClick={handleIncrementClick}>Increment</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
    handleDecrementClick: () => dispatch({ type: 'DECREMENT' })
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Container;

// XERO TEST

// const OPERATIONS = {
//   ADD: 'ADD',
//   SUBTRACT: 'SUBTRACT'
// };

// function App() {
//   const [number, updateNumber] = React.useState(0);

//   const [state, dispatch] = React.useReducer((state, action) => {
//     switch (action.type) {
//       case 'ADD':
//         return state + number;
//       case 'SUBTRACT':
//         return state - number;
//       default:
//         return state;
//     }
//   }, 0);

//   /* implement dispatches */
//   const add = () => dispatch({ type: 'ADD' });
//   const subtract = () => dispatch({ type: 'SUBTRACT' });

//   const handleNumberChange = e => updateNumber(Number(e.target.value));

//   return (
//     <div>
//       <div id="result">{state}</div>
//       <div>
//         <button id="add" onClick={add}>
//           Add
//         </button>
//         <button id="subtract" onClick={subtract}>
//           Subtract
//         </button>
//       </div>
//       <div>
//         <input type="text" value={number} onChange={handleNumberChange} />
//       </div>
//     </div>
//   );
// }

// document.body.innerHTML = "<div id='root'></div>";
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
