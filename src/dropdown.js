import './dropdown.css';

export default class Dropdown {
    /**
     * [Dropdown]
     * @param {boolean} [rightAligned=false] - Determines if dropdown is right-aligned or not
     * @param {Node} openTarget - Element used for toggling the dropdown
     * @param {('click'|'hover')} [toggleMethod="click"] - Method for toggling the dropdown
    */
    constructor(rightAligned = false, openTarget, toggleMethod = 'click') {
        if (openTarget === undefined) {
            throw new Error('openTarget is undefined');
        }

        if (!(openTarget instanceof Element)) {
            throw new Error('openTarget is not a valid element');
        }

        this.items = [];
        this.rightAligned = rightAligned;
        this.openTarget = openTarget;
        this.toggleMethod = toggleMethod;
        
        if (this.toggleMethod === 'click') {
            this.setupClickToggle();
        } else if (this.toggleMethod === 'hover') {
            this.setupHoverToggle();
        }
    }

    render() {
        this.dropdownList = document.createElement('ul');
        this.dropdownList.classList.add('dropdown')
        if (this.rightAligned) {
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

    setupClickToggle() {
        this.openTarget.addEventListener('click', () => this.toggle());
        document.addEventListener('click', (e) => {
            if(this.openTarget.contains(e.target)) {
                return;
            }
            this.close();
        })
    }

    setupHoverToggle() {
        this.openTarget.addEventListener('mouseenter', () => {
            this.toggle();
        });

        this.openTarget.addEventListener('mouseleave', () => {
            this.toggle();
        })
    }

    toggle() {
        if (this.dropdownList.classList.contains('visible')) {
            this.close();
        } else {
            this.closeAllOpenDropdowns();
            this.open();
        }
    }

    close() {
        this.dropdownList.classList.remove('visible');
    }

    open() {
        this.dropdownList.classList.add('visible');
    }
    
    closeAllOpenDropdowns() {
        const visibleDropdowns = document.querySelectorAll('.dropdown.visible');
        for (let dropdown of visibleDropdowns) {
            dropdown.classList.remove('visible');
        }
    }

    addItem(title, link) {
        this.items.push({title, link});
    }
}
