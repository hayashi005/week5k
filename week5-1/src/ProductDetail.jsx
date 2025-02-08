import React from 'react'
import { useParams } from 'react-router'
import petFoodProducts from './data'

const ProductDetail = () => {
  const { id } = useParams();
  const product = petFoodProducts.find(p => p.id === parseInt(id));
    
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container py-5">
      <div className="card">
        <img 
          src={product.image} 
          alt={product.name} 
          className="card-img-top"
          style={{ maxHeight: '400px', objectFit: 'contain' }}
        />
        <div className="card-body">
          <h1 className="card-title">{product.name}</h1>
          <p className="card-text">{product.description}</p>
          <p className="text-primary font-weight-bold">ราคา: {product.price} บาท</p>
          <button className="btn btn-success">
            ซื้อเลย
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail