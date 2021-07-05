import './style.css'
import { Link } from 'react-router-dom'
export default function Nave(){
    return(
        <nav className=' container-fluid nave'>
            <div className='rows'>
                <div className='col-sm links'>
                    <Link to='/'>Sobre</Link><Link to='/portifolio'>Portfólio</Link><Link to='/contatos'>Contatos</Link>
                </div>
            </div>
            
            
        </nav>
    )
}