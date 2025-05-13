import Card from './card.js';
(() => {
    function createTheGame(container) {
        let cardCount = prompt('введите количество карт', 8);
        let CardArr = [];
        let firstMeaning = null;
        let secondMeaning = null;
        for (let i = 1; i <= cardCount / 2; i++) {
            CardArr.push(i, i);
        }
        CardArr = CardArr.sort(() => Math.random() - 0.5);
        for (const item of CardArr) {
            new Card(container, item, action);
        }
        function action(card) {
            if (firstMeaning !== null && secondMeaning !== null) {
                firstMeaning.isOpen = false;
                secondMeaning.isOpen = false;
                firstMeaning = null;
                secondMeaning = null;
            };
            if (firstMeaning == null) {
                firstMeaning = card;
            } else {
                secondMeaning = card;
            };
            if (firstMeaning !== null && secondMeaning !== null) {
                if (firstMeaning.number == secondMeaning.number) {
                    firstMeaning.isSuccess = true;
                    secondMeaning.isSuccess = true;
                };
            };
            if (CardArr.length === document.querySelectorAll('.success ').length) {
                setTimeout(() => {
                    alert('Победа');
                    container.innerHTML = '';
                    createTheGame(container);
                }, 200);
            };
        };
    };

    createTheGame(document.getElementById('game'))
})();