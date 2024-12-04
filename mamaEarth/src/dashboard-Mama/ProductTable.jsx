import React from "react";

export const ProductTable = ({ products, onDelete, onEdit }) => {
  return (
    <table
      style={{
        boxShadow: "rgba(0, 0, 0, 0.30) 0px 3px 8px",
        padding: "30px",
        marginTop: "30px",
      }}
    >
      <thead style={{ color: "#00aeef", borderBottom: "1px solid #00aeef" }}>
        <tr>
          <th style={{ padding: "10px" }}>Products</th>
          <th>Image</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr
            key={product.id}
            style={{
              borderBottom: "1px solid #00aeef",
              boxShadow: "rgba(0, 0, 0, 0.30) 0px 0px 8px",
            }}
          >
            <td style={{ padding: "12px", marginLeft: "10px" }}>
              {product.name}
            </td>
            <td>
              <img src={product.image} alt={product.name} width="80" />
            </td>
            <td style={{padding:'10px'}}>{product.price}</td>
            <td style={{ padding: "10px", marginRight: "10px" }}>
              <button className="allBtn" onClick={() => onEdit(product)}>
                Edit
              </button>
              <button
                className="form-btn-id2"
                onClick={() => onDelete(product.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
