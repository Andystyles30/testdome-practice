import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/message">Message Component</Link>
        <br />
        <Link to="/input">Text Input Component</Link>
        <br />
        <Link to="/todo">To Do List Input Component</Link>
        <br />
        <Link to="/username">Username Component</Link>
        <br />
        <Link to="/grocery">Grocery Component</Link>
        <br />
        <Link to="/gallery">Image Gallery Component</Link>
      </React.Fragment>
    );
  }
}

export default Home;
