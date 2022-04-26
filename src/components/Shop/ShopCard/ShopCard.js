import React from "react";

//styles
import "./ShopCard.scss";

function ShopCard({ title, image, price }) {
  return (
    <div className="shop-card">
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
}

export default ShopCard;
