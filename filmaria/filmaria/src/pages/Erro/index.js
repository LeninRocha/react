import './erro.css'
import { Link } from 'react-router-dom'
export default function Erro(){
    return(
        <div>
            <h1>404</h1>
            <h2>Pagina não encontrada!</h2>
            <Link to='/'>Ir para página inicial</Link>
        </div>
        
    )
}