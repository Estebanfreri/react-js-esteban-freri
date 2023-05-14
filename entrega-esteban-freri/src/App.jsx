import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./Context/CarritoContext";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <>
      
      <BrowserRouter>
      <CarritoProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
<Route path="*" element ={<h2>Sitio en construccion</h2>}/>
        <Route path="/cart" element={<Cart/>}/>
        
        </Routes>
        </CarritoProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
