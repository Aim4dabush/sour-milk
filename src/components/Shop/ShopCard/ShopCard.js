import React from "react";

//styles
import { StyledShopCard } from "./StyledShopCard";

function ShopCards({ title, image, price }) {
  return (
    <StyledShopCard className="shop-card">
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
    </StyledShopCard>
  );
}

export default ShopCards;
