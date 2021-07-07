import { useState } from 'react';
import './customers.css';
import Title from '../../components/Title';
import Header from '../../components/Header';
import { FiUser} from 'react-icons/fi'
import firebase from '../../services/firebaseConnection'
import { toast } from 'react-toastify';
export default function Customers(){

    const [cliente, setCliente] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [endereco, setEndereco] = useState('')

    async function handleAdd(e){
        e.preventDefault()
        if( cliente !== '' && cnpj !== '' && endereco !==''){
            await firebase.firestore().collection('customers')
            .add({
                cliente: cliente,
                cnpj: cnpj,
                endereco: endereco
            })
            .then(()=>{
                setCliente('')
                setCnpj('')
                setEndereco('')
                toast.info('Cliente cadastro com sucesso')
            })
            .catch((error)=>{
                console.log(error);
                toast.error('Erro ao cadastrar')
            })
        }else{
            toast.error('Preencha todos os campos!')
        }
    }
    return(
        <div>
            <Header/>
            <div className='content'>
                <Title name='Clientes'>
                    <FiUser size={25}/>
                </Title>
                <div className='container'>
                    <form className='form-profile customers' onSubmit={handleAdd}>
                        <label>Cliente</label>
                        <input type='text' placeholder='Nome da empresa' value = {cliente} onChange ={ (e) => setCliente(e.target.value)}/>
                        <label>CNPJ</label>
                        <input type='text' placeholder='Seu CNPJ' value = {cnpj} onChange ={ (e) => setCnpj(e.target.value)}/>
                        <label>Endereço</label>
                        <input type='text' placeholder='Endereço da empresa'  value = {endereco} onChange ={ (e) => setEndereco(e.target.value)}/>
                    
                        <button type='submit'>Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}