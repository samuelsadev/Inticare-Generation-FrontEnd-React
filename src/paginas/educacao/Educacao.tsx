import React from 'react';
import './Educacao.css';

const Educacao: React.FC = () => {
  return (
    <div className="educacao-container">
      <header className="educacao-header">
        <h1 className="educacao-title">EDUCARE</h1>
        <p className="educacao-subtitle">
          Informações, dicas e recursos para promover a saúde e o bem-estar.
        </p>
      </header>

      <section className="produto-section">
        <h2 className="section-title">Produtos de Saúde</h2>
        <div className="produto-item">
          <h3>Preservativos</h3>
          <p>
            Os preservativos são essenciais para a proteção contra doenças sexualmente transmissíveis e gravidez não planejada.
          </p>
        </div>
        <div className="produto-item">
          <h3>Contraceptivos</h3>
          <p>
            Os contraceptivos ajudam a prevenir a gravidez e a planejar a família de forma eficaz.
          </p>
        </div>
        <div className="produto-item">
          <h3>Produtos de Higiene Íntima</h3>
          <p>
            Manter a higiene íntima é crucial para a saúde e bem-estar diário.
          </p>
        </div>
      </section>

      <section className="profissionais-section">
        <h2 className="section-title">Profissionais de Saúde</h2>
        <div className="profissional-item">
          <h3>Dra. Mariana Silveira</h3>
          <p>Ginecologista especializado em saúde reprodutiva.</p>
        </div>
        <div className="profissional-item">
          <h3>Dra. Ana Souza</h3>
          <p>Urologista com foco em saúde sexual masculina.</p>
        </div>
      </section>

      <section className="videos-section">
        <h2 className="section-title">Vídeos Educacionais</h2>
        <div className="video-item">
          <h3>Aprenda a utilizar preservativos</h3>
          <iframe
            src="https://www.youtube.com/embed/_S1j-0XcU3M"
            title="Aprenda a utilizar preservativos"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-frame"
          ></iframe>
        </div> <br/>
        <div className="video-item">
          <h3>Aprenda a Calcular o seu período fértil</h3>
          <iframe
            src="https://www.youtube.com/embed/6yzss8Lw46w"
            title="Aprenda a calcular o seu período fértil"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-frame"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Educacao;
