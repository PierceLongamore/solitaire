from random import shuffle

class Card:

    colors = [
        "\u001b[30;1m",
        "\u001b[31m",
    ]
    suits = "♤♡♧♢";
    ranks = "Ⓐ②③④⑤⑥⑦⑧⑨⑩ⒿⓆⓀ";

    def __init__(self, position):
        self.color = self.colors[position % len(self.colors)]
        self.suit = self.suits[position % len(self.suits)]
        self.rank = self.ranks[position // len(self.suits)]
        self.flipped = False

    def flip(self):
        self.flipped = not self.flipped

    @property
    def name(self):
        return f"{self.color}{self.rank}{self.suit}\u001b[0m"

    def __str__(self):
        return self.name if self.flipped else "X"

class Pile:

    def __init__(self):
        self.cards = []

    def __str__(self):
        cards = filter(lambda card: card.flipped, self.cards)
        return f"{self.remaining()} {' '.join(map(str, cards))}"

    def append(self, card):
        self.cards.append(card)

    def remaining(self):
        return sum(0 if card.flipped else 1 for card in self.cards)

class Game:

    def __init__(self):

        self.deck = [Card(i) for i in range(52)]
        self.waste = []
        shuffle(self.deck)

        self.piles = []
        for i in range(7):
            pile = Pile()
            for _ in range(i+1):
                card = self.deck.pop()
                pile.append(card)
            pile.cards[0].flip()
            self.piles.append(pile)

        self.deck[-1].flip()

    def __str__(self):
        piles = "\n".join(map(str, self.piles))
        return f"{len(self.deck)}: {self.deck[-1]}\n{piles}"

game = Game()
print(game)
