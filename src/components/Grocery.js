import React from 'react';

const Product = props => {
  const plus = () => {
    props.onVote(1, props.idx);
  };
  const minus = () => {
    props.onVote(-1, props.idx);
  };
  return (
    <li>
      <span>{props.product.name}</span> -{' '}
      <span>votes: {props.product.votes}</span>
      <button onClick={plus}>+</button> <button onClick={minus}>-</button>
    </li>
  );
};

const GroceryApp = props => {
  let [products, setProducts] = React.useState(props.products);
  const onVote = (dir, index) => {
    const newProducts = [...products];
    newProducts[index].votes = newProducts[index].votes + dir;
    setProducts(newProducts);
  };

  return (
    <ul>
      {products.map((product, index) => (
        <Product product={product} key={index} idx={index} onVote={onVote} />
      ))}
    </ul>
  );
};

export default GroceryApp;
