import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/index';
import ListaDeNotas from './components/ListaDeNotas/index';
import './assets/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
  }

  deletarNota(id) {
    this.setState(this.state.notas.splice(id, 1));
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArrayNotas =  [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    }
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} deletarNota={this.deletarNota.bind(this)} />
      </section>
    );
  }
}

export default App;
