class Credit extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <p>
                Sumber Data: API from 
                    <a href="https://github.com/mathdroid/covid-19-api" target="_blank" rel="noopener">
                        Github: mathdroid <button title="external link for API source" class="external-link"></button>
                    </a>
                </p>
       
    `;
  }
}

customElements.define('credit-card', Credit);
