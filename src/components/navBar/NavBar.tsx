import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import logoNavbar from '/src/assets/logo-navbar-novo.png'
import { AuthContext } from '../../contexts/AuthContext';

function Navbar() {

    const navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    return (
        <>
            <div className="navbar-container bg-gradient-to-b from-sky-100 to-white">
                <div className="navbar-content">
                <Link to="/home" className="">
                <img src={logoNavbar} alt="Logo Inticare" className="h-14 w-auto mr-2" /></Link>

                        <div className="navbar-links">
                        <Link to='/sobre' className="navbar-link">Sobre</Link>
                        <Link to='/educacao' className="navbar-link">EduCare</Link>
                        <Link to='/doacao' className="navbar-link">Care+</Link>
                        <Link to='/parcerias' className="navbar-link">Parcerias</Link>
                        <Link to="/ajuda" className="navbar-link">Ajuda</Link>
                        <Link to='/perfil' className="navbar-link">Perfil</Link>
                        <Link to="/login" className="navbar-link">Login</Link>
                        <Link to="/cadastroCategoria" className="navbar-link">Cadastro</Link>
                        <Link to='' onClick={logout} className="navbar-link">Sair</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
