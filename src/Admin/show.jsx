import React, { useState } from 'react';

function SimpleForm() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(formData)

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log('Form Submitted:', formData);
    // You can now send `formData` to a backend or perform other actions
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SimpleForm;
