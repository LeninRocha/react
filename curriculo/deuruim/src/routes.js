import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Nave from './components/Nave'
import Footer from './components/Footer'
import Sobre from './pages/Sobre'
import Contatos from './pages/Contatos'
import Portifolio from './pages/Portifolio'

const Routes = () => {
    return(
        <BrowserRouter>
            <Nave/>
            <Switch>
                <Route exact path='/' component={Sobre} />
                <Route exact path='/contatos' component={Contatos}/>
                <Route exact path='/portifolio' component={Portifolio}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}
export default Routes;