import './style.css';
import filmaria from '../../assets/imagens/filmaria.PNG'
export default function Portifolio(){
    return(
        <div className='container porte'>
            <div className='row'>
                <article className='col-sm item'>
                    <img src={ filmaria } className='foto-item img-fluid'/>
                    <h1> Filmaria </h1>
                    <p>Primeiro projeto usando React.</p>
                    <a href='https://filmaria-lr.netlify.app/' target='blank'>Acessar</a>
                </article>
                <article className='col-sm item'>
                    <img src={ filmaria } className='foto-item img-fluid'/>
                    <h1> Filmaria </h1>
                </article>
            </div>
        </div>
    )
}
