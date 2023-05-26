import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./Context/CarritoContext";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";

// import Formulario from './Formulario/Formulario';
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

        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="*" element ={<h2>Sitio en construccion</h2>}/>
        </Routes>
        </CarritoProvider>
        
      </BrowserRouter>
      {/* <Formulario/> */}
    </>
  );
}

export default App;
