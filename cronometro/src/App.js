import React, { Component } from 'react';
import relogio from './assets/cronometro.png';
import './estilo.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numero:0,
      botao: 'Go!'
    }
    this.timer = null
    this.vai = this.vai.bind(this)
    this.limpar = this.limpar.bind(this)
  }
  vai(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer)
      this.timer = null
      state.botao = 'Go!'
    }else{
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1
        this.setState(state)
      }, 100);
      state.botao = 'Stop!'
    } 
    this.setState(state) 
  }
  limpar(){
    if(this.timer !== null){
      clearInterval(this.timer)
      this.timer = null
    }
    let state = this.state;
    state.numero = 0;
    state.botao = 'Go!'
    this.setState(state)

  }
  render() { 
    return ( 
      <div className='container'>
        <img src={relogio} alt='reloginho' className='img'/>
        <p className='time'>{this.state.numero.toFixed(1)}</p>
        <div className='areaBtn'>
          <p className='botao' onClick = {this.vai}>{this.state.botao}</p>
          <p className='botao' onClick = {this.limpar}>clean</p>
        </div>
      </div>
      
     );
  }
}
 
export default App;