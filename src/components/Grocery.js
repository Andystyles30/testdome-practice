import React from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {
  const { onVote, idx, product } = props;

  const plus = () => {
    onVote(1, idx);
  };
  const minus = () => {
    onVote(-1, idx);
  };
  return (
    <li>
      <span>{product.name}</span> -{' '}
      <span>
        votes:
        {product.votes}
      </span>
      <button type="button" onClick={plus}>
        +
      </button>{' '}
      <button type="button" onClick={minus}>
        -
      </button>
    </li>
  );
};

const GroceryApp = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const [products, setProducts] = React.useState(props.products);
  const onVote = (dir, index) => {
    const newProducts = [...products];
    newProducts[index].votes += dir;
    setProducts(newProducts);
  };

  return (
    <ul>
      {products.map((product, index) => (
        <Product product={product} key={product} idx={index} onVote={onVote} />
      ))}
    </ul>
  );
};

Product.propTypes = {
  onVote: PropTypes.func.isRequired,
  idx: PropTypes.number.isRequired,
  product: PropTypes.instanceOf(Object).isRequired,
  name: PropTypes.string.isRequired,
};

GroceryApp.propTypes = {
  products: PropTypes.instanceOf(Object).isRequired,
};

export default GroceryApp;
