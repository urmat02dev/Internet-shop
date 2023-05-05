import './App.scss';

import Favorites from "./components/favorite";
import Basket from "./components/basket";
import Header from "./components/header";
import Products from "./components/products";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path="/basket" element={<Basket/>}/>
    </Routes>

    </div>
  );
}

export default App;
