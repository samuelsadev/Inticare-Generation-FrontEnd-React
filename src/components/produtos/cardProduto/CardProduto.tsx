import React from 'react';
import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { useCarrinho } from '../../../contexts/CarrinhoContext';
import './CardProduto.css'; // Importação do arquivo CSS

interface CardProdutoProps {
  post: Produto;
}

function CardProduto({ post }: CardProdutoProps) {
  const { adicionarAoCarrinho } = useCarrinho();

  const handleAddToCart = () => {
    const itemCarrinho = {
      id: post.id,
      nomeProduto: post.nomeProduto,
      descricao: post.descricao,
      preco: post.preco,
      quantidade: 1,
      categoriaModel: post.categoriaModel,
      usuarioModel: null,
      foto_produto: post.foto_produto,
    };
    adicionarAoCarrinho(itemCarrinho);
  };

  return (
    <div className="card">
      <div>
        {post.foto_produto && (
          <img
            src={post.foto_produto}
            alt={post.nomeProduto}
            className="card-img"
          />
        )}
      </div>
      <div className="card-content">
        <h4 className="card-title">{post.nomeProduto}</h4>
        <p className="card-description">{post.descricao}</p>
        <p className="card-price">Preço: R$ {post.preco.toFixed(2)}</p>
        <div className="buttons-container">
          <button
            onClick={handleAddToCart}
            className="add-to-cart-button"
          >
            Adicionar ao Carrinho
          </button>
          <Link to={`/editarProduto/${post.id}`}>
            <button className="edit-button">Editar</button>
          </Link>
          <Link to={`/deletarProduto/${post.id}`}>
            <button className="delete-button">Deletar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardProduto;