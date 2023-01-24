import Dropdown from "../src/dropdown.js";
import './style.css';

const nav = document.querySelector('nav');
const navLinks = nav.querySelector('ul');

const dropdown = new Dropdown();
dropdown.addItem('Dropdown 1', '');

const dropdownLeft = new Dropdown(true);
dropdownLeft.addItem('Dropdown 1', '');

navLinks.children[0].appendChild(dropdown.render());
navLinks.children[0].addEventListener('click', () => dropdown.toggle());

navLinks.children[2].appendChild(dropdownLeft.render());
navLinks.children[2].addEventListener('click', () => dropdownLeft.toggle());




