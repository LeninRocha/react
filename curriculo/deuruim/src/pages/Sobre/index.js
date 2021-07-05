import './style.css'
import foto from '../../assets/imagens/foto.jpg'
export default function Sobre(){
    return(
        <div className='container sobre'>
            <div className='row'>
                <div className="col-sm espacoFoto"> 
                    <img src={foto} className='foto'/> 
                </div>
                <div className = 'col-sm sobre '>
                    <h1>Apresentação</h1>
                    <p>Formado em História (2020). Possuo experiência com ferramentas digitais de educação a 
                    distância (Moodle) e de produtividade on-line (Google Docs e Google Forms). Também, 
                    possuo experiência em atividades administrativas, especialmente em instituições federais 
                    (ANA e Arquivo Nacional). Atualmente estou cursando Análise e Desenvolvimento de 
                    Sistemas.</p>
                </div>
            </div>
        </div>
    )
} 