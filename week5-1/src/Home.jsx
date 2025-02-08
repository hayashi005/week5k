import React from "react";
import petFoodProducts from "./data";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div className="container py-4">
      <div className="row">
        {petFoodProducts.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">ราคา: {product.price} บาท</p>
                <NavLink to={`/ProductDetail/${product.id}`} className="btn btn-primary">
                  ดูรายละเอียด
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
