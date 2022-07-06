function suit(value) {
    const suits = ["Spade", "Diamond", "Club", "Heart"];
    return suits[value%4];
}

function rank(value) {
    return [
        "Ace",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "Ten",
        "Jack",
        "Queen",
        "King",
    ][Math.floor(value/4)];
}

function n(value) {
    return `${rank(value)} of ${suit(value)}s`;
}


function shuffle(length) {
    let array = [...new Array(length).keys()];
    let shuffled = [];
    let index;
    for (let any = array.length; any > 0; any-=1) {
        index = Math.floor(Math.random()*any);
        shuffled.push(array.splice(index, 1)[0]);
    }
    return shuffled;
}
const print = console.log;
function deal(deck, n) {
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

const deck = [...new Array(52).keys()];
const piles = deal(deck, 7).map(pile => {
    return pile.map(n).join(', ');
}).join('\n');
console.log(piles);
console.log("Cards Left in Deck:", deck.length);
console.log("Next card:", n(deck[deck.length-1]));
// shuffle(52).forEach(card => console.log(n(card)));
// console.log(shuffle(13));

