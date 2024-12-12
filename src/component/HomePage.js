import React, { useContext } from 'react';
import { ItemContext } from './ItemContext';

const HomePage = () => {
  const { items, setItems } = useContext(ItemContext);

  const deleteItemHandler = (index) => {
    const updatedItems = items.filter((_, idx) => idx !== index);
    setItems(updatedItems);
  };
  const EditItemHandler = () => {
    
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4">Home Page</h1>

      {/* Hiển thị danh sách items */}
      <ul className="bg-gray-100 rounded-lg p-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 border-b border-gray-200 last:border-0"
          >
            {/* Hiển thị ảnh nếu có */}
            {item.image && (
              <img
                src={item.image}
                alt="Item"
                className="w-12 h-12 object-cover rounded-full mr-4"
              />
            )}
            <span>{item.name}</span>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              onClick={() => deleteItemHandler(index)}
            >
              
              Delete
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              onClick={ EditItemHandler}
            >
              
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
