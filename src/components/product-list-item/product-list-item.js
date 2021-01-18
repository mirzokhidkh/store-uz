import React from "react";
import {Link} from "react-router-dom";
import "./product-list-item.css";

const ProductListItem = ({product, addToCart}) => {
    return (
        <div className="card item">
            <Link to={"/category/smartphones-tablets/id"} className="img">
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img className="card-img-top"
                     src={product.image}
                     alt="Card image"
                />
            </Link>

            <div className="card-body">
                <div className="name">{product.name}</div>
                <p className="price">{product.price} so'm</p>
                <button className="btn btn-info" onClick={addToCart}>add</button>
            </div>
        </div>
    )
}

export default ProductListItem;