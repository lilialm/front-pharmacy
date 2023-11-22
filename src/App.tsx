import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ListaCategorias from "../src/components/categorias/listaCategorias/ListaCategorias";
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Cadastro from './pages/cadastro/Cadastro';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <div className='min-h-[80vh]'>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/categorias" element={<ListaCategorias />} />
                        <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
                        <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
                        <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </ AuthProvider>
    );
}

export default App;



