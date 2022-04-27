import React from "react";

//styles
import "./Shop.scss";

//components
import ShopCard from "./ShopCard/ShopCard";
import SideBar from "./SideBar/SideBar";

//data
import { localArtists, newArrivals, popularItems } from "./ShopData/ShopData";

function Shop() {
  return (
    <div className="shop" id="shop">
      <SideBar />
      <div className="fast-four">
        <div className="popular-items">
          <h2>Most popular items</h2>
          <div>
            {popularItems.map((item) => {
              return (
                <ShopCard
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
                <ShopCard
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
                <ShopCard
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
