class Turn{
  constructor(guess, currentCard) {
    this.guess = guess,
    this.currentCard = currentCard
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess = () => this.guess === this.currentCard.correctAnswer

  giveFeedback() {
    if (this.evaluateGuess()) {
      return "Correct!"
    } else {
      return "Incorrect!"
    }
  }
 }

module.exports = Turn
