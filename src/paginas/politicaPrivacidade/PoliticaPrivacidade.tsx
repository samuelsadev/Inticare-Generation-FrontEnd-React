import React from 'react';
import './PoliticaPrivacidade.css';

const PoliticaPrivacidade: React.FC = () => {
  return (
    <div className="politica-container">
      <h1 style={{ fontSize: '24px', color: 'var(--cor-principal)', textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>
  Política de Privacidade
</h1>

      <p>Protegemos sua privacidade e garantimos a segurança de seus dados.</p>
      <p><br/>
        Esta política de privacidade descreve como coletamos, usamos e protegemos suas informações pessoais.
      </p>
    </div>
  );
}

export default PoliticaPrivacidade;