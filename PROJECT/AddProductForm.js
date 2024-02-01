// AddProductForm.js

import React, { useState } from 'react';

const AddProductForm = () => {
  const [productData, setProductData] = useState({
    productName: '',
    description: '',
    price: '',
  });

  const handleAddProduct = (newProductData) => {
    // Add logic to send new product data to a server or store in your application
    console.log('Product added:', newProductData);
    // You can clear the form after submission if needed
    setProductData({
      productName: '',
      description: '',
      price: '',
    });
  };

  return (
    <div>
      <h3>Add Product</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Pass the new product data to the handleAddProduct function
          handleAddProduct({
            productName: e.target.productName.value,
            description: e.target.description.value,
            price: e.target.price.value,
          });
        }}
      >
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={productData.productName}
            onChange={(e) => setProductData({ ...productData, productName: e.target.value })}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={productData.description}
            onChange={(e) => setProductData({ ...productData, description: e.target.value })}
          ></textarea>
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={productData.price}
            onChange={(e) => setProductData({ ...productData, price: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
