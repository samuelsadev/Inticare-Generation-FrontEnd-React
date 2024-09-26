import React from 'react';
import './Parcerias.css';
import drogasil from '../../assets/drogasil.png';
import saude from '../../assets/saude.jpeg';
import oms from '../../assets/oms.jpg';

const Parcerias: React.FC = () => {
    return (
        <div className="parcerias-container">
            <div className="parcerias-header">
                <h1>Parcerias</h1>
                <p>Conheça nossas parcerias e os profissionais que ajudam a tornar nossa missão possível.</p>
            </div>
            <div className="parcerias-content">
                <div className="parcerias-section">
                    <h2>Nossas Parcerias</h2>
                    <p>Estamos felizes em colaborar com várias instituições e empresas para promover o bem-estar e a saúde. Nossos parceiros são uma parte essencial do nosso trabalho e estamos gratos pelo seu apoio e colaboração.</p>
                </div>
                <div className="parcerias-grid">
                    <div className="parcerias-member">
                        <img className="parcerias-photo" src={drogasil} alt="Drogasil" />
                    </div>
                    <div className="parcerias-member">
                        <img className="parcerias-photo" src={saude} alt="Tua Saúde" />
                    </div>
                    <div className="parcerias-member">
                        <img className="parcerias-photo" src={oms} alt="OMS" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Parcerias;
