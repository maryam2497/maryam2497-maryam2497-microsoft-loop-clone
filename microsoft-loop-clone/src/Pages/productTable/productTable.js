import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './productTable.css';
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
      <div className='add-product d-flex justify-content-center flex-wrap pt-2 pt-md-4 pb-2 pb-md-4'>
        <div className='me-1 me-md-3'>

        <label htmlFor="productName" className='me-1 me-md-3'>Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          />
      </div>
      <div className='me-1 me-md-3'>
        <label htmlFor="productQuantity" className='me-1 me-md-3'>Product Quantity:</label>
        <input
          type="text"
          id="productQuantity"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
          />
      </div>
      <div className='me-1 me-md-3'>
        <label htmlFor="productPrice" className='me-1 me-md-3'>Product Price:</label>
        <input
          type="text"
          id="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          />
      </div>
      {editingProductId ? (
        <>
          <button onClick={updateProduct} className='btn-save'>Save</button>
          <button onClick={cancelEditing} className='btn-cancel'>Cancel</button>
        </>
      ) : (
        <button className='btn-add' onClick={addProduct}>Add</button>
        )}

        </div >
      <table className="container mb-2 mb-md-5 table table-bordered table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl">
        <thead className='table-head'>
          <tr>
            <th >Product Name</th>
            <th >Product Quantity</th>
            <th >Product Price</th>
            <th >Actions</th>
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
                    <button onClick={updateProduct} className='btn-save'>Save</button>
                    <button onClick={cancelEditing} className='btn-cancel'>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className='me-2 btn-edit' onClick={() => startEditing(p.id)}>Edit</button>
                    <button className='btn-delete' onClick={() => deleteProduct(p.id)}>Delete</button>
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
