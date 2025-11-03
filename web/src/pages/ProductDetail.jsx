
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const allProducts = [
  { id: 1, name: 'Notebook Ultrafino', description: 'Leve e potente para o dia a dia.' },
  { id: 2, name: 'Monitor 4K', description: 'Qualidade de imagem superior para trabalho e jogos.' },
  { id: 3, name: 'Mouse Gamer RGB', description: 'Design ergonômico e precisão profissional e bonito para seu setup.' },
];

function ProductDetail() {
  // Captura o parâmetro 'id' da URL (rota /product/:id)
  const { id } = useParams();
  
  const productId = parseInt(id);
  const product = allProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <div>
        <h1>Aviso: Produto Não Encontrado (ID: {id})</h1>
        <Link to="/">← Voltar para a Lista</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Detalhes do Produto: {product.name}</h1>
      <p>
        *ID:* {product.id}
      </p>
      <p>
        *Descrição:* {product.description}
      </p>
      
      <Link to="/">← Voltar para a Lista</Link>
    </div>
  );
}

export default ProductDetail;