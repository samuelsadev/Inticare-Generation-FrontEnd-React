import React from 'react';
import './Doacao.css';

const Doacao: React.FC = () => {
  return (
    <div className="doacao-container">
      <header className="doacao-header">
        <h1>Care+</h1>
      </header>
      <div className="doacao-content">
        <section className="doacao-section">
          <p>
            O programa "Care+" é uma iniciativa que visa tornar a doação de produtos de saúde íntima, sexual e reprodutiva
            mais acessível e atraente. Ao adicionar um produto ao seu carrinho de compras e optar por doar
            um produto semelhante para nossa campanha, você receberá um desconto de 10% na sua compra total.
          </p><br/>
          <p>
            Essa ação não só contribui para a melhoria das condições de saúde das pessoas que precisam,
            mas também oferece uma vantagem para você, incentivando a participação ativa em nossa missão
            de promover o bem-estar e a saúde.
          </p>
          <p><br/>
            Para participar, basta escolher o produto que deseja doar durante o processo de compra e o desconto
            será aplicado automaticamente na sua compra final. Sua contribuição faz uma diferença significativa,
            ajudando a garantir que os produtos essenciais cheguem a quem realmente precisa.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Doacao;
