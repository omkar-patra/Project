// ProductList.js

import React from 'react';

const ProductList = ({ products, onEditProduct }) => {
  return (
    <div>
      <h3>Product List</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.productName} - ${product.price}{' '}
            <button onClick={() => onEditProduct(product.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
