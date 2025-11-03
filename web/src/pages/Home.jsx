
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Notebook Ultrafino', description: 'Leve e potente para o dia a dia.' },
  { id: 2, name: 'Monitor 4K', description: 'Qualidade de imagem superior para trabalho e jogos.' },
  { id: 3, name: 'Mouse Gamer RGB', description: 'Design ergonômico e precisão profissional.' },
];

function Home() {
  return (
    <div>
      <h1> Página Inicial: Lista de Produtos</h1>
      <p>Acesse o detalhe do produto pela rota `/product/:id`.</p>
      
      <ul className="product-list"> 
        {products.map((product) => (
          <li key={product.id}>
           <Link to={`/product/${product.id}`}>
              *{product.name}* (ID: {product.id})
            </Link>
          </li>
        ))}
      </ul>

      <hr />
      <p>
        <Link to="/product/999">Testar Produto Inexistente (ID 999)</Link>
      </p>
    </div>
  );
}

export default Home;