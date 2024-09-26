import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sobre from './paginas/sobre/Sobre';
import Ajuda from './paginas/ajuda/Ajuda';
import Login from './paginas/login/Login';
import Parcerias from './paginas/parcerias/Parcerias';
import Educacao from './paginas/educacao/Educacao';
import Cadastro from './paginas/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
import FormularioProduto from './components/produtos/formularioProduto/FormularioProduto';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import Perfil from './paginas/perfil/Perfil';
import Carrinho from './components/carrinho/Carrinho';
import { CarrinhoProvider } from './contexts/CarrinhoContext';
import PoliticaPrivacidade from './paginas/politicaPrivacidade/PoliticaPrivacidade';
import TermosUso from './paginas/termosUso/TermosUso';
import ListaProdutosPorCategoria from './components/produtos/listaProdutosPorCategoria/ListaProdutosPorCategoria';
import Doacao from './paginas/doacao/Doacao';
//import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <AuthProvider>
      <CarrinhoProvider> {/* Envolvendo o CarrinhoProvider */}
      <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/educacao" element={<Educacao />} />
              <Route path="/parcerias" element={<Parcerias />} />
              <Route path="/doacao" element={<Doacao />} />
              <Route path="/ajuda" element={<Ajuda />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/categorias" element={<ListaCategorias/>} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/produtos/categoria/:id" element={<ListaProdutosPorCategoria />} />
              <Route path="/cadastroProdutos" element={<FormularioProduto />} />
              <Route path="/editarProduto/:id" element={<FormularioProduto />} />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/carrinho" element={<Carrinho />} />
              <Route path="/termos-uso" element={<TermosUso />} />
              <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </CarrinhoProvider> {/* Fechando o CarrinhoProvider */}
        </AuthProvider>
    </>
);
}
export default App;