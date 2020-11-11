import React from 'react';

class Username extends React.Component {
  state = { value: '' };

  changeValue(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return <h1>{value}</h1>;
  }
}

function User() {
  const input = React.useRef(null);
  const username = React.useRef(null);
  function clickHandler() {
    username.current.changeValue(input.current.value);
  }

  return (
    <div>
      <button onClick={clickHandler}>Change Username</button>
      <input type="text" ref={input} />
      <Username ref={username} />
    </div>
  );
}

export default User;
