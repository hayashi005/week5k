import React from 'react';

const CardProduct = (props) => {
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
                    <a href={`/product/${props.item.id}`} className="btn btn-primary mb-2">
                        ดูรายละเอียด
                    </a>
                    <button className="btn btn-success mt-2">
                        ซื้อเลย
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
