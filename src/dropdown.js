export default class Dropdown {
    constructor() {
        this.items = [];
    }

    render() {
        this.dropdownList = document.createElement('ul');

        return this.dropdownList;
    }

    addItem(title, link) {
        this.items.push({title, link});
    }
}