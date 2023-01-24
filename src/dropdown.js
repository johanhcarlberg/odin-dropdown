import './dropdown.css';

export default class Dropdown {
    constructor(left) {
        this.items = [];
        this.left = left || false;
    }

    render() {
        this.dropdownList = document.createElement('ul');
        this.dropdownList.classList.add('dropdown')
        if (this.left) {
            this.dropdownList.classList.add('dropdown-left');
        }

        for (const item of this.items) {
            const dropdownItem = document.createElement('li');
            dropdownItem.classList.add('dropdown-item');

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
        console.log(this);
        if (this.dropdownList.classList.contains('visible')) {
            this.close();
        } else {
            const visibleDropdowns = document.querySelectorAll('.dropdown.visible');
            for (let dropdown of visibleDropdowns) {
                dropdown.close();
            }
            this.open();
        }
    }

    close() {
        dropdown.classList.remove('visible');
    }

    open() {
        this.dropdownList.classList.add('visible');
    }

    addItem(title, link) {
        this.items.push({title, link});
    }
}
