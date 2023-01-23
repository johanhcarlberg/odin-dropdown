export default class Dropdown {
    constructor() {
        this.items = [];
    }

    render() {
        this.dropdownList = document.createElement('ul');
    }

    addItem(title, link) {
        this.items.push({title, link});
    }
}