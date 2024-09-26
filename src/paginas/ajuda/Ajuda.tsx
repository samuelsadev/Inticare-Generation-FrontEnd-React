import React, { useState } from 'react';
import './Ajuda.css';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import { toastAlerta } from '../../util/toastAlerta';

const Ajuda: React.FC = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [duvida, setDuvida] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowPopup(true);
    };

    return (
        <div className="help-container">
            <h2 id="ajuda" className="centered-text">Como podemos te ajudar?</h2>
            <p id="escrever" className="centered-text">Escreva sua dúvida no formulário abaixo:</p>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome" style={{ color: '#33a9b6' }}>Nome</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        style={{ borderColor: '#33a9b6' }}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" style={{ color: '#33a9b6' }}>Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ borderColor: '#33a9b6' }}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="duvida" style={{ color: '#33a9b6' }}>Dúvida</label>
                    <textarea className='textarea'
                        id="duvida"
                        value={duvida}
                        onChange={(e) => setDuvida(e.target.value)}
                        style={{ borderColor: '#33a9b6' }}
                        required
                    />
                </div>
                <button className="button text-white" type="submit">Enviar</button>
            </form>

            {showPopup && (
                <div className="popup">
                    <p className='p'>Obrigado, {nome}, sua dúvida foi enviada com sucesso!</p>
                    <button onClick={() => setShowPopup(false)}>Fechar</button>
                </div>
            )}
        </div>
    );
};

export default Ajuda;

