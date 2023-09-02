class DartLogo extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {

        this.innerHTML = `
            <img src="logos/logo_dart_192px.svg" alt="Dart logo" class="logo" />
        `;
        
    }
}

window.customElements.define('dart-logo', DartLogo);