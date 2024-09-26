import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer className="footer-container">
                <div className="container mx-auto border-t border-opacity-30 border-sky-300 p-6">
                    <div className="footer-content">
                        <p className="footer-text font-bold">INTICARE | Copyright: 2024</p>
                        <div className="footer-links">
                            <Link to="/politica-privacidade" className="footer-link">Política de Privacidade</Link>
                            <span className="footer-divider"> | </span>
                            <Link to="/termos-uso" className="footer-link">Termos de Uso</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
