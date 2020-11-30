import React from 'react';
import PropTypes from 'prop-types';

class FocusableInput extends React.Component {
  ref = React.createRef();

  componentDidMount() {
    console.log(this.props);
    const { focused } = this.props;
    if (focused) {
      this.ref.current.focus();
    }
  }

  // When the focused prop is changed from false to true,
  // and the input is not focused, it should receive focus.
  // If focused prop is true, the input should receive the focus.
  // Implement your solution below:
  componentDidUpdate(prevProps) {
    const { focused } = this.props;
    if (prevProps.focused !== focused && focused) {
      this.ref.current.focus();
    }
  }

  render() {
    // return <TextInput ref={this.ref} onClick={this.handleClick} />;
    return (
      <>
        <div data-testid="location-display">you are on the text input page</div>
        <input ref={this.ref} />
      </>
    );
  }
}

FocusableInput.defaultProps = {
  focused: false,
};

FocusableInput.propTypes = {
  focused: PropTypes.bool,
};

export default FocusableInput;
