import { LitElement, html, css } from "./lit-all.min.js"

export class PlayingCard extends LitElement {

    static colors = ["red", "black"];
    static suits = "♠♣♦♥".split("");
    static ranks = [
        "Ace",
        "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "Jack", "Queen", "King"
    ];
    static properties = {
        revealed: {
            attribute: false,
            type: Boolean,
        },
        ordinal: Number,
    };

    get codePoint() {
       return 0x1F0A0 +
            (this.revealed ? 
                1 + 0x10*(this.ordinal % 4) +
                Math.floor(this.ordinal / 4) : 0
            );
    }

    get char() {
        return String.fromCodePoint(this.codePoint)
    }

    get suit() {
        return this.constructor.suits[this.ordinal % 4]
    }

    get rank() {
        return this.constructor.ranks[Math.floor(this.ordinal / 4)]
    }

    constructor() {
        super();
        this.revealed = false;
        this.ordinal = 0;
    }

    static styles = css`
        :host {
            display: flex;
            font-size: 5em;
        }
    `;

    render() {
        return html`${this.char}`
    }

}

customElements.define('playing-card', PlayingCard);
