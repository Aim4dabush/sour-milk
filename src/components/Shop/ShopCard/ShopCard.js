import React from "react";

//styles
import { StyledShopCard } from "./StyledShopCard";

function ShopCards({ image, price, title }) {
  return (
    <StyledShopCard className="shop-card">
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
    </StyledShopCard>
  );
}

export default ShopCards;
