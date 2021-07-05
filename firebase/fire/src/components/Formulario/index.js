import firebase from '../../firebaseConnection';
import { useState } from 'react'
import './style.css'

export default function Formulario(){

    const [nome, setNome] = useState('');
    const [texto, setTexto] = useState('');
    async function salvaComentario() {
    
        await firebase.firestore().collection('post')
        .add({
          nome: nome,
          texto: texto,
        })
        .then( () => {
          setTexto('')
          setNome('')
        })
        .catch( (error) => {
          alert('Ops! alguma coisa deu errada!' + error)
        })
      }  
    return(
        <div>
            <div className='container'>
                <h1>Comente aqui!</h1>
                <label>Nome: </label>
                <input type='text' value={nome} onChange={ (e) =>setNome(e.target.value)}/>
                <label>Comentário</label>
                <textarea value={texto} onChange={ (e) => setTexto(e.target.value) }/>
                <button onClick={ salvaComentario }>Comentar</button>
                
            </div>
        </div>
    )
}