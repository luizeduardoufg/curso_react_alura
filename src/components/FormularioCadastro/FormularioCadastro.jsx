import React, { Component } from 'react';
import './style.css';

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: '',
      texto: '',
      categoria: '',
    }
  }

  _handleMudancaTitulo(event) {
    event.stopPropagation();
    this.setState({titulo: event.target.value});
  }

  _handleMudancaTexto(event) {
    event.stopPropagation();
    this.setState({texto: event.target.value});
  }

  _handleMudancaCategoria(event) {
    event.stopPropagation();
    this.setState({categoria: event.target.value});
  }

  _criarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.state.titulo, this.state.texto, this.state.categoria);
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <select
          onChange={this._handleMudancaCategoria.bind(this)}
          className="form-cadastro_input"
        >
          {this.props.categorias.map((categoria, index) => (
            <option
              key={index}
            >{categoria.nome}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="form-cadastro_input"
          placeholder="Título"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          className="form-cadastro_input"
          placeholder="Escreva sua nota"
          onChange={this._handleMudancaTexto.bind(this)}
        >
        </textarea>
        <button
          className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;