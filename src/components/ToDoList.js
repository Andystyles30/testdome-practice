import React from 'react';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
  handleItemClick(item, event) {
    const { onItemClick } = this.props;
    // Write your code here
    if (!item.done) {
      event.persist();
      onItemClick(item, event);
    }
  }

  render() {
    const { items } = this.props;
    console.log(items);
    return (
      <ul>
        {items.map((item) => (
          <button type="button" onClick={this.handleItemClick}>
            {item.text}
          </button> // this is temporary to fix eslint errors
          // <li>{item.text}</li>
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.instanceOf(Object).isRequired,
  onItemClick: PropTypes.func.isRequired,
};
export default TodoList;
