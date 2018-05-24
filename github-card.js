class GithubCard extends HTMLElement {
    constructor() {
        super();
        this.currentDocument = document.currentScript.ownerDocument;
        this.baseUrl = 'https://api.github.com/'
    }

    async connectedCallback() {
        // setup shadow Dom
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const template = this.currentDocument.querySelector('#github-card-template');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);


        const username = this.getAttribute('username');
        const theme = this.getAttribute('theme');
        const userDataUrl = this.getApi(`users/${username}`);
        const userData = await this.getData(userDataUrl);
        this.renderData(userData);

    }
    getApi(endpoint) {
        this.api = this.baseUrl + endpoint;
        return this.api;
    }
    async getData(url) {
        const result = await fetch(url)
            .then((response) => response.text())
            .catch((error) => {
                console.error(error);
            });
        const json = await JSON.parse(result);
        return json;
    }
    renderData(jsonData) {
        this.shadowRoot.querySelector('#username').innerHTML = jsonData.name;
        this.shadowRoot.querySelector('#followers').innerHTML = jsonData.followers;
        this.shadowRoot.querySelector('#following').innerHTML = jsonData.following;
        this.shadowRoot.querySelector('#repos').innerHTML = jsonData.public_repos;
    }

}

customElements.define('gh-card', GithubCard);