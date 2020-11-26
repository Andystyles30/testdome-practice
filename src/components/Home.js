import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends React.Component {
  render() {
    return (
      <>
        <div data-testid="location-display">you are home</div>
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
        <br />
        <Link to="/redux">Redux Component</Link>
      </>
    );
  }
}

export default Home;
