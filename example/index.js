import Dropdown from "../src/dropdown.js";
(() => {
    const nav = document.querySelector('nav');
    const navLinks = nav.querySelector('ul');
    
    const dropdown = new Dropdown();
    dropdown.addItem('Dropdown 1', '');

    navLinks.children[0].appendChild(dropdown.render());
})();



