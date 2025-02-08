import React from 'react';
import { Link } from 'react-router';
import { useCart } from '../CartContext';

const CardProduct = (props) => {
    const { addToCart } = useCart();
    
    if (!props.item) {
        return null;
    }

    return (
        <div className="card h-100">
            <img
                src={props.item.image || "https://via.placeholder.com/150"}
                className="card-img-top"
                alt={props.item.name || "No image available"}
            />
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">{props.item.description}</p>
                <p className="text-primary font-weight-bold">฿{props.item.price}</p>
                <div className='d-flex flex-column justify-content-between'>
                    <Link to={`/ProductDetail/${props.item.id}`} className="btn btn-primary mt-2">
                        ดูรายละเอียด
                    </Link>
                    <button 
                        className="btn btn-success mt-2"
                        onClick={() => addToCart(props.item)}
                    >
                        เพิ่มลงตะกร้า
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;