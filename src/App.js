import "./App.scss";

//components
import Advertisements from "./components/Advertisements/Advertisements";
import Discount from "./components/Discount/Discount";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Discount />
      <NavBar />
      <Advertisements />
    </div>
  );
}

export default App;
