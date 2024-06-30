import { Flex, Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

export const ProductForm = ({ product, editing, onSubmit, onCancel }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name);
      setImage(product.image);
      setPrice(product.price);
      setCategory(product.category);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      ...product,
      name,
      image,
      price,
      category
    };
    onSubmit(productData);
  };

  return (
    <form onSubmit={handleSubmit} className="formInput-data">
      <Heading size={"10px"} color={"#00aeef"}>Product Data</Heading>
      <Flex flexDirection={"column"} >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </Flex>
      <Flex justifyContent={"center"} gap={"10px"}>
        <button type="submit" className="allBtn" id="form-btn-id1">
          {editing ? "Update" : "Add"}
        </button>
        <button
          type="button"
          className="form-btn-id2"
          onClick={onCancel}
        >
          Cancel
        </button>
      </Flex>
    </form>
  );
};
