import IProduct from "../Interfaces/IProduct";
import TrashButton from "../TrashButton/TrashButton";
import React from "react";

function Product({ title, price, description }: IProduct) {
    return (
        <div className="card text-center" style={{ width: '300px' }}>
            <img src="/free-icon-household-7029117.png" className="card-img-top" alt="..." style={{ objectFit: "none" }} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
                <p className="card-text">{description}</p>
                <TrashButton counter={0} />
            </div>
        </div>
    );
}

export default Product;