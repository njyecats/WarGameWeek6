const SUITS= ["♠", "♡", "♦", "♣"]
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

const CARD_VALUE_MAP = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "J": 11,
  "Q": 12,
  "K": 13,
  "A": 14,
}

class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards
    } 

    get numberOfCards() {
        return this.cards.length
    }

    pop() {
    return this.cards.shift()    
    }

    push(card) {
        this.cards.push(card)
    }
    
    shuffle() {  
    for (let i = this.numberOfCards - 1; i > 0; i--) {
    const newIndex = Math.floor(Math.random() * (i + 1))
    const oldValue = this.cards[netIndex]
    this.cards[newIndex] = this.cards[i]
    this.cards[i] = oldValue
}
}
}

class Card {
constructor(suit, value) {
    this.suit = suit
    this.value = value
}


}

function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}

const computerCardsSlot = document.querySelector('.computer-card-slot')
constplayerCardSlot = document.querySelector('.player-card-slot')
const computerDeckElement = document.querySelector('.computer-deck')
const playerDeckElement = document.querySelector('.player-deck')
const text = document.querySelector('text')

let playerDeck, computerDeck, inRound, stop

document.addEventListener('click', () => {
  if (stop) { 
      startGame()
      return
  }
  
  if (inRound) {
      cleanBeforeRound()
  } else {
      flipCards()
  }
  
  })

startGame()
function startGame() {
    const deck = new Deck ()
    deck.shuffle()

const deckMidpoint = Math.ceil(deck.numberofCards / 2)
playerDeck = new (deck.cards.slice(0, deckMidpoint))
computerDeck = new (deck.cards.slice(deckMidpoint, deck.numberOfCards))
inRound = false
stop = false

cleanBeforeRound()
}

function cleanBeforeRound() {
inRound = false
computerCardsSlot.innerHTML = ''
playerCardSlot.innerHTML = ''
text.innerText = ''

updateDeckCount()
}

function flipCards() {
  inRound = true

  const playerCard = playerDeck.pop()
  const computerCard = computerDeck.pop()

  playerCardSlot.appendChild(playerCard.getHTML())
  computerCardSlot.appendChild(computerCard.getHTML())
  
updateDeckCountCount() 

if (isRoundWinner(playerCard, computerCard)) {
  text.innerText = "Win!"
  playerDeck.push(playerCard)
  playerDeck.push(computerCard)
} else if (isRoundWinner(computerCard, playerCard)) {
  text.innerText = "Lose!"
  computerDeck.push(playerCard)
  computerDeck.push(computerCard)
} else {
  text.innerText = "Draw!"
  computerDeck.push(computerCard)
  playerDeck.push(playerCard)
}
if(isGameOver(playerDeck)) {
text.innerText = 'You Lose!!!'
stop = true
} else if (isGameOver(computerDeck)) {
text.innerText = 'You Win!!!'
stop = true
}
}

function updateDeckCount() {
  computerDeckElement.innerText = computerDeck.numberOfCards
  playerDeckElement.innerText = playerDeck.numberOfCards
}

function isRoundWinner(cardOne, cardTwo) {
return CARD_VALUE_MAP [cardOne.value] > CARD_VALUE_MAP [cardTwo.value]
}

function isGameOVer(deck) {  
  return deck.numberOfCards === 0
}