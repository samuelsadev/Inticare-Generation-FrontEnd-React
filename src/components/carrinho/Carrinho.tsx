import React, { useState } from 'react';
import { useCarrinho } from '../../contexts/CarrinhoContext';
import './Carrinho.css';

const Carrinho = () => {
  const { itensDoCarrinho, removerDoCarrinho, setItensDoCarrinho } = useCarrinho();
  const [totalComDesconto, setTotalComDesconto] = useState<number | null>(null);

  // Calcular o total dos itens no carrinho
  const calcularTotal = (itens: Array<{ preco: number; quantidade: number }>): number => {
    return itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  };

  // Função para aplicar o desconto de 10% na compra
  const aplicarDesconto = (valor: number): number => {
    return valor * 0.9;  // Aplicar 10% de desconto
  };

  // Função para adicionar itens doados com o mesmo valor e aplicar o desconto
  const handleDoarProdutos = () => {
    const confirmacao = window.confirm(
      "Gostaria de realizar a doação dos mesmos produtos para uma pessoa? O valor total da sua compra será reduzido em 10%."
    );
    if (confirmacao) {
      // Criar uma nova lista de itens para doação com o preço normal
      const novosItens = itensDoCarrinho.map(item => ({
        ...item,
        id: item.id + 1000000,  // Garantir que o ID seja único e do tipo number
       // nomeProduto: `${item.nomeProduto} (Doação)`  // Adicionar "(Doação)" ao nome do produto
      }));

      // Adicionar os itens doados ao carrinho
      setItensDoCarrinho(prevItens => [
        ...prevItens,
        ...novosItens
      ]);

      // Calcular o total com os itens doados
      const novoTotal = calcularTotal([
        ...itensDoCarrinho,
        ...novosItens
      ]);

      // Aplicar o desconto de 10% no valor total
      const totalDescontado = aplicarDesconto(novoTotal);
      setTotalComDesconto(totalDescontado);
    }
  };

  // Função para remover um item específico e atualizar o total e o desconto
  const handleRemoverProduto = (id: number) => {
    // Remover o item específico
    const itensAtualizados = itensDoCarrinho.filter(item => item.id !== id);
    setItensDoCarrinho(itensAtualizados);

    // Recalcular o total
    const novoTotal = calcularTotal(itensAtualizados);

    // Se o total for zero, zerar o desconto aplicado
    if (itensAtualizados.length === 0) {
      setTotalComDesconto(null);
    } else {
      // Aplicar o desconto ao novo total
      const totalDescontado = aplicarDesconto(novoTotal);
      setTotalComDesconto(totalDescontado);
    }
  };

  // Função para remover todos os itens do carrinho
  const handleRemoverTodos = () => {
    setItensDoCarrinho([]);  // Limpar o carrinho
    setTotalComDesconto(null);  // Zerando o desconto aplicado
  };

  // Função para finalizar a compra
  const handleFinalizarCompra = () => {
    alert('Compra finalizada com sucesso!');
  };

  // Mostrar o total com desconto se o desconto foi aplicado, caso contrário, mostrar o total normal
  const totalExibido = totalComDesconto !== null ? totalComDesconto : calcularTotal(itensDoCarrinho);

  return (
    <div className="container mx-auto my-4">
      <h2 className="text font-bold">Carrinho de Compras</h2>
      <ul className="list-none p-0 max-h-96 overflow-y-auto">
        {itensDoCarrinho.map(item => (
          <li key={item.id} className="border p-4 mb-2">
            <div>
              <p className="font-bold">
                {item.nomeProduto}
                {item.id >= 1000000 && <span className="text-gray-500"> (Doação)</span>}
              </p>
              <p>{item.descricao}</p>
            </div>
            <button
              onClick={() => handleRemoverProduto(item.id)}
              className="bg-red-500 text-white p-2 mt-2"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold" style={{ color: '#33a9b6' }}>
        Total: R$ {totalExibido.toFixed(2)}
      </h3>
      {totalComDesconto !== null && (
        <p className="text-red-500">Desconto aplicado: R$ {(calcularTotal(itensDoCarrinho) - totalComDesconto).toFixed(2)}</p>
      )}
      <button
        onClick={handleFinalizarCompra}
        className="bg-green-500 text-white p-2 mt-4"
      >
        Finalizar Compra
      </button>
      <button
        onClick={handleDoarProdutos}
        className="bg-blue-500 text-white p-2 mt-4 ml-2"
      >
        Doar Produtos
      </button>
      <button
        onClick={handleRemoverTodos}
        className="bg-gray-500 text-white p-2 mt-4 ml-2"
      >
        Remover Todos
      </button>
    </div>
  );
};

export default Carrinho;
