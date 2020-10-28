question = [
    { picture: '../images/games/cardmatching/c2c31c93b2aeddf396e3d16312ee202f', word: 'word', audio: 'audio'},
    { picture: '../images/games/cardmatching/c2c31c93b2aeddf396e3d16312ee202f', word: 'word', audio: 'audio'},
    { picture: '../images/games/cardmatching/c2c31c93b2aeddf396e3d16312ee202f', word: 'word', audio: 'audio'},
    { picture: '../images/games/cardmatching/c2c31c93b2aeddf396e3d16312ee202f', word: 'word', audio: 'audio'},
    { picture: '../images/games/cardmatching/c2c31c93b2aeddf396e3d16312ee202f', word: 'word', audio: 'audio'},
    { picture: '../images/games/cardmatching/c2c31c93b2aeddf396e3d16312ee202f', word: 'word', audio: 'audio'}
]

const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.toggle('flip')
    
    // console.log(this)
    // if (lockBoard) return;
    // if (this === firstCard) return;

    // this.classList.add('flip');

    // if (!hasFlippedCard) {
    //     hasFlippedCard = true;
    //     firstCard = this;

    //     return;
    // }

    // secondCard = this;
    // checkForMatch();
}

cards.forEach(card => card.addEventListener('click', flipCard));