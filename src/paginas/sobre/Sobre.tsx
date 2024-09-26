import React from 'react';
import './Sobre.css';
import carlos from '../../assets/carlos.jpg';
import dani from '../../assets/dani.jpeg';
import edvaldo from '../../assets/edvaldo.jpg';
import fer from '../../assets/fer.jpg';
import gui from '../../assets/gui.jpg';
import sara from '../../assets/sara.jpg';
import samuel from '../../assets/samuel.jpg';

const Sobre: React.FC = () => {
  const teamMembers = [
    { name: 'Carlos Eduardo', imgSrc: carlos, linkedin: 'https://www.linkedin.com/in/carlos-eduardo-correia-9bab16277/' },
    { name: 'Daniele Valonga', imgSrc: dani, linkedin: 'https://www.linkedin.com/in/daniele-valonga-72a49a254/' },
    { name: 'Edvaldo Junior', imgSrc: edvaldo, linkedin: 'https://www.linkedin.com/in/edvaldo-junior-dev/' },
    { name: 'Fernanda Viotto', imgSrc: fer, linkedin: 'https://www.linkedin.com/in/fernanda-viotto-de-gobbi/' },
    { name: 'Guilherme Soares', imgSrc: gui, linkedin: 'https://www.linkedin.com/in/guilherme-soarest/' },
    { name: 'Samuel Sá', imgSrc: samuel, linkedin: 'https://www.linkedin.com/in/samuel-sa/' },
    { name: 'Sara Oliveira', imgSrc: sara, linkedin: 'https://www.linkedin.com/in/saramonteirooliveira/' }
  ];

  return (
    <div className="sobre-container">
      <header className="sobre-header">
        <h1>Sobre</h1>
        <p>Conheça mais sobre nossa missão, valores e equipe.</p>
      </header>
      <div className="sobre-content">
        <section className="sobre-section">
          <h2>Nossa Missão</h2>
          <p>
            Nossa missão é promover a saúde e o bem-estar por meio da educação e
            da oferta de produtos de qualidade. Trabalhamos com profissionais
            experientes para garantir que nossos recursos atendam às necessidades
            da comunidade.
          </p>
        </section>
        <section className="sobre-section">
          <h2>Nossos Valores</h2>
          <p>
            Valorizamos a integridade, a inovação e o cuidado com nossos clientes.
            Estamos comprometidos com a transparência e buscamos sempre oferecer
            soluções que façam a diferença na vida das pessoas.
          </p>
        </section>
        <section className="sobre-section">
          <h2>História</h2>
          <p>
            Desde o início, nossa organização tem se comprometido com a qualidade
            e inovação no setor de saúde. Nossa história é marcada por conquistas
            e pelo constante desejo de melhorar.
          </p>
        </section>
        <section className="sobre-section">
          <h2>Nossa Equipe</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <a key={index} href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-member">
                <img src={member.imgSrc} alt={member.name} className="team-photo" />
                <p>{member.name}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sobre;
