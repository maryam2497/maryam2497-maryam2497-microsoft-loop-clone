import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [editingProductId, setEditingProductId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/products/getProducts');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async () => {
    try {
      const newProduct = {
        productName: productName,
        productQuantity: productQuantity,
        productPrice: productPrice
      };
      const response = await axios.post('http://localhost:8000/products/createProduct', newProduct);
      console.log(response.data);
      setProductName('');
      setProductQuantity('');
      setProductPrice('');
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/products/deleteProducts?id=${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const startEditing = (id) => {
    const product = products.find((p) => p.id === id);
    setEditingProductId(id);
    setProductName(product.productName);
    setProductQuantity(product.productQuantity);
    setProductPrice(product.productPrice);
  };

  const cancelEditing = () => {
    setEditingProductId(null);
    setProductName('');
    setProductQuantity('');
    setProductPrice('');
  };

  const updateProduct = async () => {
    try {
      const updatedProduct = {
        id: editingProductId,
        productName: productName,
        productQuantity: productQuantity,
        productPrice: productPrice
      };
      const response = await axios.put('http://localhost:8000/products/updateProducts', updatedProduct);
      console.log(response.data);
      setEditingProductId(null);
      setProductName('');
      setProductQuantity('');
      setProductPrice('');
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="productQuantity">Product Quantity:</label>
        <input
          type="text"
          id="productQuantity"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="text"
          id="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>
      {editingProductId ? (
        <>
          <button onClick={updateProduct}>Save</button>
          <button onClick={cancelEditing}>Cancel</button>
        </>
      ) : (
        <button onClick={addProduct}>Add</button>
      )}

      <table className="table table-bordered table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Product Quantity</th>
            <th scope="col">Product Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} scope="row">
              <td>{p.productName}</td>
              <td>{p.productQuantity}</td>
              <td>{p.productPrice}</td>
              <td>
                {editingProductId === p.id ? (
                  <>
                    <button onClick={updateProduct}>Save</button>
                    <button onClick={cancelEditing}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => startEditing(p.id)}>Edit</button>
                    <button onClick={() => deleteProduct(p.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
