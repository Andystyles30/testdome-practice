import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Counter = ({ count, handleDecrementClick, handleIncrementClick }) => {
  return (
    <div>
      <h1>
        Helloworld React & Redux!
        {count}
      </h1>
      <button type="button" onClick={handleDecrementClick}>
        Decrement
      </button>
      <button type="button" onClick={handleIncrementClick}>
        Increment
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state,
});
const mapDispatchToProps = (dispatch) => ({
  handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
  handleDecrementClick: () => dispatch({ type: 'DECREMENT' }),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Counter);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  handleDecrementClick: PropTypes.func.isRequired,
  handleIncrementClick: PropTypes.func.isRequired,
};

export default Container;
