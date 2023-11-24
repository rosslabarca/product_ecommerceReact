
import React from 'react';
import ProductDetail from './components/ProductDetail/ProductDetail';
import './App.css';


function App() {
  const product = {
    name: 'Anillo Cubo',
    description: 'Hermoso anillo con diseño geométrico, muy vanguardista, ideal para la mujer de hoy. Pieza de oro 18K o plata 925, medida 6-1/2".',
    price: 57000,
    quantity: 10,
    sku: 'ABC1000',
    images: ['anillo-1.jpg', 'anillo-2.jpg', 'anillo-3.jpg', 'anillo-4.jpg'],
  };


  return (

    <div className="App">
     
        <ProductDetail 
        product={product} 
       />

    </div>
  );
}

export default App;
