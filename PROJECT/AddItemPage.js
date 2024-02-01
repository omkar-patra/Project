// AddItemPage.js

import React, { useState } from 'react';

const AddItemPage = () => {
  const [itemData, setItemData] = useState({
    itemName: '',
    description: '',
    price: '',
    // Add more item-related data as needed
  });

  const handleAddItem = (newItemData) => {
    // Add logic to send new item data to a server or store in your application
    console.log('Item added:', newItemData);
    // You can clear the form after submission if needed
    setItemData({
      itemName: '',
      description: '',
      price: '',
    });
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Pass the new item data to the handleAddItem function
          handleAddItem({
            itemName: e.target.itemName.value,
            description: e.target.description.value,
            price: e.target.price.value,
            // Add more fields as needed
          });
        }}
      >
        <label>
          Item Name:
          <input type="text" name="itemName" value={itemData.itemName} onChange={(e) => setItemData({ ...itemData, itemName: e.target.value })} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={itemData.description} onChange={(e) => setItemData({ ...itemData, description: e.target.value })}></textarea>
        </label>
        <br />
        <label>
          Price:
          <input type="text" name="price" value={itemData.price} onChange={(e) => setItemData({ ...itemData, price: e.target.value })} />
        </label>
        <br />
        {/* Add more fields for item details */}
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItemPage;
