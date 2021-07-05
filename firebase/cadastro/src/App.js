import './firebaseConnection'
import { useState } from 'react' 
import firebase from './firebaseConnection';

async function novoUsuario(){
  await firebase.auth().createUserWithEmailAndPassword(email, senha)
  .then(()=>{
    alert('cadastrado com sucessos')
  })
  .catch((error)=>{
    alert('Error' + error )
  })
}
function App() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('')
  return (
    <div className='container'>
      <label>Email</label>
      <input type='text' value={ email } onChange={(e) => setEmail(e.target.value)} />
      <label>Senha</label>
      <input type='password' value={ senha } onChange={(e) => setSenha(e.target.value)} />
      <button onClick={ novoUsuario }>Cadastrar</button>
    </div>
  );
}

export default App;
