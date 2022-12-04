/* eslint-disable no-underscore-dangle */
class Region extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>    
        .ts-dropdown-content, .ts-control .item, .has-items .ts-control > input{
            font-size: 18px;
        }
        </style>
        <select title="Select Region Data" id="select-region" autocomplete="off" placeholder="Pilih Negara" slot="select-region">          
        </select>
        <h1 id="region-name"></h1>
        <p>Last Update: <span id="last-update"></span></p>
    `;
  }
}

customElements.define('region-card', Region);
