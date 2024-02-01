// EditProductForm.js

import React, { useState } from 'react';

const EditProductForm = ({ product, onUpdateProduct, onCancel }) => {
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example: Send updated product data to a backend
    onUpdateProduct(editedProduct);
  };

  return (
    <div>
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={editedProduct.productName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={editedProduct.description}
            onChange={handleChange}
          ></textarea>
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={editedProduct.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Update Product</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProductForm;
