import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/index';
import ListaDeNotas from './components/ListaDeNotas/index';
import ListaDeCategorias from './components/ListaDeCategorias/index';
import './assets/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: [],
    };
  }

  deletarNota(id) {
    this.setState(this.state.notas.splice(id, 1));
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    }
    this.setState(novoEstado);
  }

  criarCategoria(nome) {
    const novaCategoria = { nome };
    const novoArrayCategorias = [...this.state.categorias, novaCategoria];
    const novoEstado = {
      categorias: novoArrayCategorias,
    }
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          criarNota={this.criarNota.bind(this)}
          categorias={this.state.categorias}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.state.categorias}
            criarCategoria={this.criarCategoria.bind(this)}
          />
          <ListaDeNotas
            notas={this.state.notas}
            deletarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
