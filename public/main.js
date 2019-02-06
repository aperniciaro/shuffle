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
let unshuffledDeck = []
let shuffledDeck = []

const reload = () => {
  buildDeck()
  shuffle()
}

const buildDeck = () => {
  for (let cVal = 0; cVal < cardValues.length; cVal++) {
    for (let cSuit = 0; cSuit < cardSuits.length; cSuit++) {
      unshuffledDeck.push(cardValues[cVal] + ' of ' + cardSuits[cSuit])
    }
  }
  // console.log(unshuffledDeck)
}

const shuffle = () => {
  for (let n = unshuffledDeck.length - 1; n >= 0; n--) {
    let randInt = Math.floor(Math.random() * n)
    shuffledDeck.push(unshuffledDeck[randInt])
    unshuffledDeck.splice(randInt, 1)
  }
  console.log(shuffledDeck)
}

const drawCard = () => {
  const yourCard = document.createElement('li')
  yourCard.textContent = shuffledDeck[0]
  document.querySelector('.visible-hand').appendChild(yourCard)
  shuffledDeck.splice(0, 1)
  console.log(shuffledDeck)
}

document.addEventListener('DOMContentLoaded', reload)
document.querySelector('#draw-pile').addEventListener('click', drawCard)
