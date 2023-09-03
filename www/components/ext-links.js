class ExtLinks extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {

        // get name attribute
        const name = this.getAttribute('name');

        // get hasPub attribute
        const hasPub = this.getAttribute('hasPub');

        var pubHTML = '';
        if(hasPub === 'true') {
            pubHTML = `
                <a href="https://pub.dev/packages/${name}" class="ext-link" target="_blank" >
                    <dart-logo></dart-logo>
                </a>
            `;
        }

        // get hasDoc attribute
        const hasDoc = this.getAttribute('hasDoc');

        var docHTML = '';
        if(hasDoc === 'true') {
            docHTML = `
                <a href="https://piotrfleury.github.io/${name}/" class="ext-link" target="_blank" >
                    <img src="logos/doc.svg" alt="Documentation logo" class="logo" />
                </a>
            `;
        }

        this.innerHTML = `
            <span class="ext-links">
                ${pubHTML}
                <a href="https://github.com/PiotrFLEURY/${name}" class="ext-link" target="_blank" >
                    <github-logo></github-logo>
                </a>
                ${docHTML}
            </span>
        `;
        
    }
}

window.customElements.define('ext-links', ExtLinks);