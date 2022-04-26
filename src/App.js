import "./App.scss";

//components
import Advertisements from "./components/Advertisements/Advertisements";
import Contact from "./components/Contact/Contact";
import Discount from "./components/Discount/Discount";
import Events from "./components/Events/Events";
import NavBar from "./components/NavBar/NavBar";
import OurStory from "./components/OurStory/OurStory";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Discount />
      <NavBar />
      <Advertisements />
      <Shop />
      <Events />
      <OurStory />
      <Contact />
    </div>
  );
}

export default App;
