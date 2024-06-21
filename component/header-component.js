class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = 'this is header'
    }
}

export default customElements.define('header-component',Header)