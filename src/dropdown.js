import './dropdown.css';

export default class Dropdown {
    constructor() {
        this.items = [];
    }

    render() {
        this.dropdownList = document.createElement('ul');
        this.dropdownList.classList.add('dropdown')

        for (const item of this.items) {
            const dropdownItem = document.createElement('li');
            dropdownItem.classList.add('dropdown-item', 'visible');

            const dropdownLink = document.createElement('a');
            dropdownLink.classList.add('dropdown-item-link');
            dropdownLink.href = item.link;
            dropdownLink.text = item.title;
            dropdownItem.appendChild(dropdownLink);

            this.dropdownList.appendChild(dropdownItem);
        }

        return this.dropdownList;
    }

    toggle() {
        this.dropdownList.classList.toggle('visible');
    }

    addItem(title, link) {
        this.items.push({title, link});
    }
}
