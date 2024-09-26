import React from 'react';
import './TermosUso.css';

const TermosUso: React.FC = () => {
  return (
    <div className="termos-container">
     <h1 style={{ fontSize: '24px', color: 'var(--cor-principal)', textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>
  Termos de Uso
</h1>
      <p>Estes são os termos de uso do nosso site e dos nossos serviços.</p>
      <p><br/>
        Ao utilizar nosso site, você concorda com todos os termos descritos aqui. Por favor, leia atentamente.
      </p>
    </div>
  );
}

export default TermosUso;