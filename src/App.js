import "./App.scss";

//components
import Advertisements from "./components/Advertisements/Advertisements";
import Discount from "./components/Discount/Discount";
import NavBar from "./components/NavBar/NavBar";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Discount />
      <NavBar />
      <Advertisements />
      <Shop />
    </div>
  );
}

export default App;
