let cardValues = [
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Jack',
  'Queen',
  'King',
  'Ace'
]
let cardSuits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
let deck = []

const reload = () => {
  buildDeck()
  shuffle()
  document.querySelector('button').classList.add('empty-deck')
  document.querySelector('button').classList.remove('draw-pile')
}

const buildDeck = () => {
  for (let cVal = 0; cVal < cardValues.length; cVal++) {
    for (let cSuit = 0; cSuit < cardSuits.length; cSuit++) {
      deck.push(cardValues[cVal] + ' of ' + cardSuits[cSuit])
    }
  }
}

const shuffle = () => {
  for (let i = deck.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))

    let posI = deck[i]
    let posJ = deck[j]

    deck[i] = posJ
    deck[j] = posI
  }
  console.log(deck)
}

const drawCard = () => {
  if (deck.length > 0) {
    const yourCard = document.createElement('li')
    yourCard.textContent = deck[0]
    document.querySelector('.visible-hand').appendChild(yourCard)
    deck.splice(0, 1)
  } else {
    // document.querySelector('button').classList.remove('draw-pile')
    // document.querySelector('button').classList.add('empty-deck')
  }
  console.log(deck)
}

document.addEventListener('DOMContentLoaded', reload)
document.querySelector('#draw-pile').addEventListener('click', drawCard)
