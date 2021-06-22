import React, { Component } from 'react';
import './assets/estilo.css';
import biscoito from './assets/biscoito.png';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Drope um acido', 'fume um baseado', 'cheire até ter paranoia',
  'fique bebado até caçar confunsão no bar','bafora aquele lança','ta sem grana? vai de tiner',
'ta sem grana? vai de pedra 90','dia de baile, dia de MD','dia triste, vai tomar um rivotril', 'fumar cigarro', ];
  }
  
  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = this.frases[numeroAleatorio];
    this.setState(state)
  }
  render() { 
    return ( 
      <div className='container'>
        <h1>Biscoito das drogas</h1>
        <img src={biscoito} alt='biscoito' className="img" />
        <Botao nome='Abrir Biscoito' acaoBtn={this.quebraBiscoito}/>
        <h3 className='textoFrase'>{this.state.textoFrase}</h3>
      </div>
     );
  }
}

class Botao extends Component {

  render() { 
    return ( 
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
     );
  }
}
 

 
export default App;