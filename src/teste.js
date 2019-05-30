import React, { Component } from "react";

export class Teste extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    };
  }

  getItems() {
    return [...this.state.items].sort();
  }

  addItem(event) {
    if (event.which === 13) {
      const newItems = [...this.state.items].concat(event.target.value);
      this.setState({ items: newItems });
      event.target.value = "";
    }
  }

  render() {
    return (
      <div>
        <h3>Quantidade de caracter na palavra</h3>

        <label>
          Qualquer palavra:&nbsp;
          <input autoFocus type="text" onKeyUp={event => this.addItem(event)} />
        </label>

        <br />
        <br />

        <label>
          Palavra - Qtd Caracter:
          <ol>
            {this.getItems().map(item => (
              <li>
                {item} - {item.length}
              </li>
            ))}
          </ol>
        </label>
      </div>
    );
  }
}
export default Teste;
