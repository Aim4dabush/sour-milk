import React, { useState } from "react";
import "./App.scss";

//components
import Advertisements from "./components/Advertisements/Advertisements";
import Contact from "./components/Contact/Contact";
import Discount from "./components/Discount/Discount";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import OurStory from "./components/OurStory/OurStory";
import Shop from "./components/Shop/Shop";

//context
export const Overlay = React.createContext({});

function App() {
  const [opacity, setOpacity] = useState(false);
  const [giftCard, setGiftCard] = useState(false);
  return (
    <div className="App">
      <Overlay.Provider
        value={{
          opacity: opacity,
          setOpacity: setOpacity,
          giftCard: giftCard,
          setGiftCard: setGiftCard,
        }}
      >
        <Discount />
        <NavBar />
        <Advertisements />
        <Shop />
        <Events />
        <OurStory />
        <Contact />
        <Footer />
      </Overlay.Provider>
    </div>
  );
}

export default App;
