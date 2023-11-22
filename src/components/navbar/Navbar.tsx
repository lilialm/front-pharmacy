import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'

 
function Navbar() {

    const navigate = useNavigate()
    const { handleLogout } = useContext(AuthContext)
  
    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }
    return (
        <>
            <div className='w-full bg-indigo-900 text-white
                flex justify-center py-4'>
            
            <div className="container flex justify-between text-lg">
	         <Link to='/home' className='text-2xl font-bold'>Farmácia Boa Vida</Link>

                    <div className='flex gap-4'>
                        Produtos
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        Perfil
                        <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar