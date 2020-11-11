import React from 'react';

const TodoItem = props => <li onClick={props.onClick}>{props.item.text}</li>;

class TodoList extends React.Component {
  render() {
    const { items } = this.props;
    console.log(items);
    return (
      <ul>
        {items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            onClick={this.handleItemClick.bind(this, item)}
          />
        ))}
      </ul>
    );
  }

  handleItemClick(item, event) {
    // Write your code here
    if (!item.done) {
      event.persist();
      this.props.onItemClick(item, event);
    }
  }
}

export default TodoList;
