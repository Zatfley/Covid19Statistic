/* eslint-disable no-underscore-dangle */
class StatisticsCovid19 extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
    <style>
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .confirmed, .death{
        font-size: 24px;
        padding: 10px;
        
      }
      .confirmed > p, .death > p {
          padding: 5px;
      }
      .confirmed > p:first-child{
          font-weight: bolder;
          color: #497174;
          font-size: 28px;
      }
      
      
      
      .death > p:first-child{
          font-weight: bolder;
          color: #ec4e22;
          font-size: 28px;
      }
    </style>
    <div class="confirmed">
      <p>Confirmed</p>
      <p id="confirmed-count">${this._data.confirmed.value.toLocaleString()}</p>
    </div>
    <div class="death">
        <p>Death</p>
        <p id="death-count">${this._data.deaths.value.toLocaleString()}</p>
    </div>
    `;
  }
}

customElements.define('statistics-data', StatisticsCovid19);
