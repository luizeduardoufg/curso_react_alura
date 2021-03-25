import React, { Component } from 'react';
import './style.css';

class ListaDeCategorias extends Component {
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.criarCategoria(event.target.value);
      event.target.value = '';
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categoria, index) => (
            <li
              key={index}
              className="lista-categorias_item">{categoria.nome}
            </li>
          ))}
        </ul>
        <input
          type="text"
          onKeyDown={this.handleKeyPress.bind(this)}
          placeholder="Adicionar categoria"
        />
      </section>
    );
  }
}

export default ListaDeCategorias;