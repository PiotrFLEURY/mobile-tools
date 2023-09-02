class GithubLogo extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {

        this.innerHTML = `
            <img src="logos/github-mark.svg" alt="Github logo" class="logo" />
        `;
        
    }
}

window.customElements.define('github-logo', GithubLogo);