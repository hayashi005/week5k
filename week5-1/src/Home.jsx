import React from "react";
import petFoodProducts from "./data";
import CardProduct from "./components/CardProduct";

const Home = () => {
  return (
    <div className="container py-5">
      <div className="row py-5">
        {petFoodProducts.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <CardProduct item={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;