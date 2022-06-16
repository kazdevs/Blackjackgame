//hard coded player object
let player = {
  name: 'Kaz',
  chips: 500,
}

//variable declaration
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')

playerEl.textContent = player.name + ': $' + player.chips

//This function gets a random number between 1 and 13
//any number greater than 10 is either a jack,queen or a king hence their value is equal to 10
//An ace is worth 11 which is represented as a geting a random number of 1
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

//This function initializes the game
function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

//This function renders the game
function renderGame() {
  cardsEl.textContent = 'Cards: '
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' '
  }

  sumEl.textContent = 'Sum: ' + sum
  if (sum <= 20) {
    message = 'Do you want to draw a new card?'
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
}

//This function deals a new random card and then re-renders the game
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}
