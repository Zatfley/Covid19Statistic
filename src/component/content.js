/* eslint-disable no-underscore-dangle */
import './info-covid19';
import './region';
import './statistics-data';
import './credit';

class Content extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const InfoCovid19Element = document.createElement('info-covid19');
    const RegionCardElement = document.createElement('region-card');
    const StatisticsCardElement = document.createElement('statistics-card');
    const CreditCardElement = document.createElement('credit-card');

    this.appendChild(InfoCovid19Element);
    this.appendChild(RegionCardElement);
    this.appendChild(StatisticsCardElement);
    this.appendChild(CreditCardElement);
  }
}

customElements.define('content-card', Content);
