class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `<footer style=" background-color: white; padding: 4rem; margin-top: 3rem; text-align: center; font-size: 1rem; width: 100%; bottom: 0;">Copyright &copy; 2020 Valencia Rosas Ivana Daniela.</footer>`;
            
    }
}
customElements.define("mi-footer", MiFooter);
