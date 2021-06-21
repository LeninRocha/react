import React, { Component } from 'react';
class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      hora:'00:00:00'
    }
  }
  componentDidMount(){ // esse componente inicia junto com a aplicação

    setInterval(() => {
      this.setState({hora: new Date().toLocaleTimeString()})
    }, 1000);
  }

  componentDidUpdate(){ // sempre que a aplicação atualizar esse componente vai fazer o processo
    console.log('Atualizou')
  }
  
  render() { 
    return ( 
      <div>
        <h1>Meu projeto {this.state.hora}</h1>
      </div>
     );
  }
}
 
export default App;