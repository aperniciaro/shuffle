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
}

const buildDeck = () => {
  for (let cVal = 0; cVal < cardValues.length; cVal++) {
    for (let cSuit = 0; cSuit < cardSuits.length; cSuit++) {
      unshuffledDeck.push(cardValues[cVal] + ' of ' + cardSuits[cSuit])
    }
  }
  console.log(unshuffledDeck)
}

const shuffle = () => {}

// load page function

//   array of card values
//   array of suits

//   function with loop concatenating card values and suits and pushing to new array

//   array of cards

//   function randomizing array of cards

//   loop swapping items from array of cards with shuffled array

//   shuffled array

// event click

//   hand array

//   remove top card from shuffled array
//   add top card to hand array

//   put new hand array item as li in ul in DOM

document.addEventListener('DOMContentLoaded', reload)
