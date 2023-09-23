class AndroidLogo extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {

        this.innerHTML = `
            <img src="logos/android.svg" alt="Android logo" class="logo" />
        `;
        
    }
}

window.customElements.define('android-logo', AndroidLogo);