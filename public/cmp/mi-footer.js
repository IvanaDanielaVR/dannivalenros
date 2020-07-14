class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Valencia Rosas Ivana Daniela.`;
    }
}
customElements.define("mi-footer", MiFooter);