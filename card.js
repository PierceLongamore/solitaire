export class Card {

    static suits = ["A", "B", "C", "D"];
    static ranks = [
        "Ace",
        "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "Jack", "Queen", "King"
    ];

    constructor(ordinal) {
        this.ordinal = ordinal;
        this.hidden = true;
    }

    get suit() {
        return this.prototype.suits[this.ordinal % 4]
    }

    get rank() {
        return this.prototype.ranks[Math.floor(this.ordinal / 4)]
    }

}

export class Deck {

    constructor(size) {
        this.cards = [...new Array(size).keys()].map(i => new Card(i));
    }

    shuffle() {
        for (let i = this.cards.length; i; i--) {
            let index = Math.floor(Math.random()*i);
            let temp = this.cards[index];
            this.cards[index] = this.cards[i-1];
            this.cards[i-1] = temp;
        }
        return this.cards;
    }

    deal(n) {
        let i = 0;
        let piles = [];
        while (i < n) {
            let cards_to_be_added_to_pile = i+1;
            piles[i] = [];
            while (cards_to_be_added_to_pile > 0) {
                piles[i].push(deck.pop());
                cards_to_be_added_to_pile--;
            }
            i++;
        }
        return piles;
    }

}



