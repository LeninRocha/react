import './firebaseConnection';
import { useState } from 'react' ;
import firebase from './firebaseConnection';
import './style.css'


function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cargo, setCargo] = useState('');
  const [nome, setNome] = useState('');
  const [user, setUser] = useState({});

async function novoUsuario(){
  await firebase.auth().createUserWithEmailAndPassword(email, senha) //add novo usuario usando o firebase
  .then( async (value)=>{
    await firebase.firestore().collection('users') // obtem as informações do auth e usa o uid para criar o id dentro do firestore
    .doc(value.user.uid)
    .set({
      nome: nome,
      cargo: cargo,
      status: true,
    })
    .then(() => {
      setNome('');
      setCargo('');
      setEmail('');
      setSenha('');
    })
  })
  .catch((error)=>{
    if(error.code === 'auth/weak-password'){ //resposta de erro, observar documentação
      alert('Senha muito fraca.')
    } else if (error.code ==='auth/email-already-in-use'){
      alert('Esse email já existe')
    }
  })
}
async function logout(){
  await firebase.auth().signOut();
  setUser({})
}
async function fazerLogin(){
  await firebase.auth().signInWithEmailAndPassword(email, senha)
  .then(async(value) => {
    await firebase.firestore().collection('users')
    .doc(value.user.uid)
    .get()
    .then((snapshot)=>{
      setUser({
      nome: snapshot.data().nome,
      cargo: snapshot.data().cargo,
      email:value.user.email,
    })
    });
  })
  .catch((error)=>{
    alert('Erro ao logar' + error)
  })
}
  return (
    
    <div className='container'>
      <label>Email</label>
      <input type='text' value={ email } onChange={(e) => setEmail(e.target.value)} />
      <label>Senha</label>
      <input type='password' value={ senha } onChange={(e) => setSenha(e.target.value)} />
      <label>Cargo</label>
      <input type='text' value={ cargo } onChange={(e) => setCargo(e.target.value)} />
      <label>Nome</label>
      <input type='text' value={ nome } onChange={(e) => setNome(e.target.value)} />
      <button onClick={ fazerLogin }>Login</button>
      <button onClick={ novoUsuario }>Cadastrar</button>
      <button onClick={ logout }>Sair</button>
      {Object.keys(user).length > 0 && (
        <div>
          <p>Olá {user.nome}</p>
          <p>Cargo: {user.cargo}</p> 
          <p>Email: {user.email}</p>
          <p>Status: {String(user.status)}</p>
          </div>
      )}
    </div>
  );
}

export default App;
