const currentDocument = document.currentScript.ownerDocument;
class GithubCard extends HTMLElement {
    constructor() {
        super();
        // if (document.currentScript !== null)
        //     this.currentDocument = document.currentScript.ownerDocument;
        // else
        //     this.connectedCallback();
        this.baseUrl = 'https://api.github.com/'
    }

    async connectedCallback() {
        // setup shadow Dom
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const template = currentDocument.querySelector('#github-card-template');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);


        const username = this.getAttribute('username');
        const theme = this.getAttribute('theme');
        if (theme && theme.length > 1)
            this.shadowRoot.querySelector('.gh-card').classList.add(theme);
        const themeKind = this.getAttribute('kind');
        if (themeKind && themeKind.length > 1)
            this.shadowRoot.querySelector('.gh-card').classList.add(themeKind);
        const userDataUrl = this.getApi(`users/${username}`);
        const userData = await this.getData(userDataUrl);
        this.renderData(userData);

    }
    getApi(endpoint) {
        const accessToken = '254efbce6aab3aba810ec0cfb06f765e2314d09d';
        this.api = this.baseUrl + endpoint + `?access_token=${accessToken}`;
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
        if (jsonData.location != null)
            this.shadowRoot.querySelector('#location').innerHTML = `⚲ ${jsonData.location}`;
        this.shadowRoot.querySelector('.avatar').href = jsonData.url;
        this.shadowRoot.querySelector('.avatar img').src = jsonData.avatar_url;
        this.shadowRoot.querySelector('#followers').innerHTML = jsonData.followers;
        this.shadowRoot.querySelector('#following').innerHTML = jsonData.following;
        this.shadowRoot.querySelector('#repos').innerHTML = jsonData.public_repos;
        this.shadowRoot.querySelector('#followers_url').href = jsonData.url + '?tab=followers';
        this.shadowRoot.querySelector('#following_url').href = jsonData.url + '?tab=following'
        this.shadowRoot.querySelector('#repos_url').href = jsonData.url + '?tab=repositories';
    }

}

customElements.define('gh-card', GithubCard);