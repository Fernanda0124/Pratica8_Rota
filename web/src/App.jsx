
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail'; 

function App() {
  return (
    <BrowserRouter>
      <header style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <nav>
          <Link to="/" style={{ marginRight: '15px' }}>Início</Link>
          <Link to="/product/1">Detalhe Exemplo</Link>
        </nav>
      </header>

      <main style={{ padding: '20px' }}>
        <Routes>
          {/* Rota para a página inicial  */}
          <Route path="/" element={<Home />} /> 
          
          {/* Rota dinâmica para detalhes do produto  */}
          <Route path="/product/:id" element={<ProductDetail />} />
          
          {/* Rota 404 para caminhos não encontrados */}
          <Route path="*" element={<h1>Página Não Encontrada (404)</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;