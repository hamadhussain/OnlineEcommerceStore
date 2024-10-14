"use client";
import { useState } from "react";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState("");
  const [stock, setStock] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const productData = {
  //     name,
  //     description,
  //     price: parseFloat(price),
  //     category,
  //     stock: parseInt(stock, 10),
  //     images,
  //   };

  //   const response = await fetch("/Server/Admin", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(productData),
  //   });

  //   if (response.ok) {
  //     alert("Product created successfully!");
  //   } else {
  //     alert("Error creating product.");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      name,
      description,
      price: parseFloat(price),
      category,
      stock: parseInt(stock, 10),
      images: images.trim(), // Just make sure to trim any whitespace
    };
  
    const response = await fetch("/Server/Admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
  
    if (response.ok) {
      alert("Product created successfully!");
    } else {
      alert("Error creating product.");
    }
  };
  
  return (
    <div className="h-screen g flex justify-center items-center flex-col mx-6 md:mx-4">
      <div className="max-w-lg  w-full border-t-2 -black bg-white rounded-lg shadow-md p-4">
        <h2 className="text-2xl font-bold mb-4">Create Product</h2>
        <form onSubmit={handleSubmit} className=" flex flex-col sm:grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded-md col-span-2"
          />
          <input
            type="text"
            placeholder="Image URLs/Name"
            value={images}
            onChange={(e) => setImages(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded-md col-span-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 col-span-2"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
