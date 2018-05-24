class GithubCard extends HTMLElement {
    constructor() {
        super();
        this.currentDocument = document.currentScript.ownerDocument;
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const template = this.currentDocument.querySelector('#github-card-template');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);
        const userId = this.getAttribute('username');
        const theme = this.getAttribute('theme');

        // fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        //     .then((response) => response.text())
        //     .then((responseText) => {
        //         this.render(JSON.parse(responseText));
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }
   
}

customElements.define('gh-card', GithubCard);