import './style.css'
import github from '../../assets/imagens/github.png'
import linkedin from '../../assets/imagens/linkedin.png'
export default function Footer(){
    return(
        <footer className=' container-fluid rodape'>
            <div className='rows'>
                <div className='col-sm'>
                <a href='https://github.com/LeninRocha' target="blank"><img src = { github } className='icone' /> </a>
                <a href='https://www.linkedin.com/in/lenin-rocha/' target="blank"><img src = { linkedin } className='icone' /></a>
                </div>
            </div>    
        </footer>
    )
}