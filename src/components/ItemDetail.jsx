import React from "react";
import Contador from "./contador";

const ItemDetail = ({product}) => {
    return (
        <div className="row">
            <div className="col-12 col-md-6 col-lg3">
                <img src={product.img} alt={product.name}/>
            </div>
            <div className="col-12 col-md-6 col-lg3">
                <h1 className="product-tittle">{product.name}</h1>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <Contador init="0" min="0" max="20" onAdd={() => console.log("onAdd")}/>
                <button className="btn-buy">Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemDetail;
