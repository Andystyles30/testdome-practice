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
