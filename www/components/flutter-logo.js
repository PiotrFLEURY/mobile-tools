class FlutterLogo extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {

        this.innerHTML = `
            <img src="logos/logo_flutter_1080px_clr.svg" alt="Flutter logo" class="logo" />
        `;
        
    }
}

window.customElements.define('flutter-logo', FlutterLogo);