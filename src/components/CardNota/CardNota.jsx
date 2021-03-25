import React, { Component } from 'react';
import './style.css';
import {ReactComponent as DeleteSVG} from '../../assets/img/delete.svg';

class CardNota extends Component {
  handleOnClick(event) {
    const idNota = this.props.id;
    this.props.deletarNota(idNota);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG
            className="delete-hover"
            onClick={this.handleOnClick.bind(this)}
          />
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;