import React, { useContext, useState } from "react";

//styles
import "./Shop.scss";

//components
import ShopCards from "./ShopCard/ShopCard";
import SideBar from "./SideBar/SideBar";

//context
import { Overlay } from "../../App";

//data
import { localArtists, newArrivals, popularItems } from "./ShopData/ShopData";

function Shop() {
  const { opacity } = useContext(Overlay);

  return (
    <div className="shop" id="shop">
      <SideBar />
      <div className={`fast-four ${opacity && "overlay"}`}>
        <div className="popular-items">
          <h2>Most popular items</h2>
          <div>
            {popularItems.map((item) => {
              return (
                <ShopCards
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
        <div className="new-arrivals" id="new-arrivals">
          <h2>New Arrivals</h2>
          <div>
            {newArrivals.map((arrival) => {
              return (
                <ShopCards
                  key={arrival.id}
                  title={arrival.title}
                  image={arrival.image}
                  price={arrival.price}
                />
              );
            })}
          </div>
        </div>
        <div className="local-artist">
          <h2>Local Artists</h2>
          <div>
            {localArtists.map((artist) => {
              return (
                <ShopCards
                  key={artist.id}
                  title={artist.title}
                  image={artist.image}
                  price={artist.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
