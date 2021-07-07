import './header.css';
import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';
import Avatar from '../../assets/avatar.png';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiSettings} from 'react-icons/fi'
export default function Header(){
    const { user } = useContext(AuthContext)
    return(
        <div className='sidebar'>
            <div>
                <img src = {user.avatarUrl === null ? Avatar : user.avatarUrl} alt='avatar'/>
            </div>
            <Link to='/dashboard'><FiHome color='#FFF' size={24}/>Chamados</Link>
            <Link to='/customers'><FiUser color='#FFF' size={24}/>Cliente</Link>
            <Link to='/profile'><FiSettings color='#FFF' size={24}/>Configurações</Link>
        </div>
    )
}