import Dropdown from "../src/dropdown.js";
import './style.css';

const nav = document.querySelector('nav');
const navLinks = nav.querySelector('ul');

const dropdown = new Dropdown(false, navLinks.children[0]);
dropdown.addItem('Dropdown 1', '');
navLinks.children[0].appendChild(dropdown.render());

const dropdownLeft = new Dropdown(true, navLinks.children[2]);
dropdownLeft.addItem('Dropdown 1', '');
navLinks.children[2].appendChild(dropdownLeft.render());





