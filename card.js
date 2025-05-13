export 
default class Card {
    open = false;
    success = false;
    constructor(container, number, action) {
        this.card = document.createElement('div');
        this.number = number;
        this.card.classList.add('card');
        this.card.textContent = number;

        this.card.addEventListener('click', () => {
            if (this.isOpen == false && this.isSuccess == false) {
                this.isOpen = true;
                action(this);
            };
        });
        container.append(this.card);
    };
    set isOpen(value) {
        this.open = value;
        value ? this.card.classList.add('open') :
            this.card.classList.remove('open');
    };
    get isOpen() {
        return this.open;
    };
    set isSuccess(value) {
        this.success = value;
        value ? this.card.classList.add('success') :
            this.card.classList.remove('success');
    };
    get isSuccess() {
        return this.success;
    };
};

