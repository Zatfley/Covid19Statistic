/* eslint-disable no-underscore-dangle */
class InfoCovid19 extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p>Penyakit virus corona (COVID-19) adalah penyakit menular yang disebabkan oleh virus SARS-CoV-2.</p>
        <p>Sebagian besar orang yang tertular COVID-19 akan mengalami gejala ringan hingga sedang, dan akan pulih tanpa penanganan khusus.</p>
        <p> Namun, sebagian orang akan mengalami sakit parah dan memerlukan bantuan medis. 
            <a href="https://www.who.int/news-room/questions-and-answers/item/coronavirus-disease-covid-19-how-is-it-transmitted" target="_blank" rel="noopener">
                <button class="external-link" title="external link for detail info about COVID-19"></button>
            </a>
        </p>
    `;
  }
}

customElements.define('info-covid19', InfoCovid19);
