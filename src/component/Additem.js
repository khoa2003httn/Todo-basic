import React, { useState, useContext } from 'react';
import { ItemContext } from './ItemContext';
import { useNavigate } from 'react-router-dom';

const AddItemPage = () => {
  const [inputText, setInputText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); // Lưu ảnh đã chọn
  const { items, setItems } = useContext(ItemContext);
  const navigate = useNavigate();

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Lưu ảnh dưới dạng base64
      };
      reader.readAsDataURL(file);
    }
  };

  const addItemHandler = () => {
    if (inputText.trim() !== '') {
      // Thêm item bao gồm cả tên và ảnh
      setItems([...items, { name: inputText, image: selectedImage }]);
      setInputText('');
      setSelectedImage(null); // Reset ảnh sau khi thêm
      navigate('/');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add Item</h1>

        {/* Input để nhập tên item */}
        <input
          type="text"
          value={inputText}
          onChange={inputTextHandler}
          placeholder="Add to Item"
          className="border border-gray-300 rounded-lg w-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
        />

        {/* Input để chọn ảnh */}
        <input
          type="file"
          onChange={handleImageChange}
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full"
          accept="image/*"
        />

     
        {selectedImage && (
          <div className="flex justify-center mb-4">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>
        )}

        {/* Nút thêm item */}
        <button
          onClick={addItemHandler}
          className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddItemPage;
