import { useState, useEffect } from 'react'
import firebase from '../../firebaseConnection';
import './style.css'

export default function Resposta(){

    const [post, setPost] = useState([])

  useEffect(()=>{
    async function loadPosts(){
      await firebase.firestore().collection('post').onSnapshot((doc) => {
        let meusPosts = [];
        doc.forEach((item)=>{
          meusPosts.push({
            id: item.id,
            nome: item.data().nome,
            texto: item.data().texto
          })         
        })
        setPost(meusPosts)
      })
    }
    loadPosts();
  },[])

  async function excluirPost(id){
    await firebase.firestore().collection('post').doc(id)
    .delete()
    .then(()=>{
      alert('foi excluido')
    })
  }

    return(
    <div className='respostas'>
      <ul>
        {post.map((posts) => {
          return(
            <li key={posts.id}>
              <h3>Nome: {posts.nome}</h3>
              <p>Comentário: {posts.texto}</p>
              <button onClick={ () => excluirPost(posts.id)}>Excluir</button>
            </li>
          )
        })}

      </ul>
    </div>  

    )
}

