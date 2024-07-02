import { useState, useEffect } from "react";
import axios from "axios";
import { ProductForm } from "./ProductForm";
import { ProductTable } from "./ProductTable";
import { ProductCategoryStats } from "./ProductStat";
import { Sidebar } from "./SideBar";
import { Heading } from "@chakra-ui/react";

export const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://mama-earth-clone.onrender.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addProduct = async (product) => {
    try {
      await axios.post("https://mama-earth-clone.onrender.com/products", product);
      fetchProducts();
      setSelectedProduct(null);
      setEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      await axios.put(`https://mama-earth-clone.onrender.com/products/${id}`, updatedProduct);
      fetchProducts();
      setSelectedProduct(null);
      setEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`https://mama-earth-clone.onrender.com/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleProductSubmit = (product) => {
    if (editing) {
      updateProduct(product.id, product);
    } else {
      addProduct(product);
    }
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setEditing(true);
  };

  const handleCancelClick = () => {
    setSelectedProduct(null);
    setEditing(false);
  };

  return (
    <>
         <Heading
        style={{
          textAlign: "center",
          color: "#ffffff",
          backgroundColor: "#00aeef",
          padding:"10px",
          fontFamily:'sans-serif',
          fontSize:'30px'

        }}
      >
        Dashboard
      </Heading>
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <div className="dashboard-ryt-divs">
          <ProductCategoryStats products={products} />
          <ProductForm
            product={selectedProduct}
            editing={editing}
            onSubmit={handleProductSubmit}
            onCancel={handleCancelClick}
          />
        </div>
        <ProductTable
          products={products}
          onDelete={deleteProduct}
          onEdit={handleEditClick}
        />
      </div>
    </div>
    </>
  );
};
