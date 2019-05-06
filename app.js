const listOfStars = document.querySelector('.stars');
const star1 = listOfStars.getElementsByTagName('li')[0];
const star2 = listOfStars.getElementsByTagName('li')[1];
const star3 = listOfStars.getElementsByTagName('li')[2];
const moves = document.querySelector('.moves');
const resetButton = document.querySelector('.restart');
const deck = document.querySelector('.deck');
const cards = document.querySelectorAll('.card');
const arrayOfCards = [];
let openCards = [];
let matchCards = [];
for (const card of cards) {
    arrayOfCards.push(card);
};

deck.addEventListener('click', showCard);

resetButton.addEventListener('click', startGame);

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    };

    return array;
};

function startGame() {
    const shuffleCards = shuffle(arrayOfCards);
    for (let i = 0; i < shuffleCards.length; i++) {
        [].forEach.call(shuffleCards, function(item) {
            deck.appendChild(item);
        });
        
        cards[i].classList.remove('show', 'open', 'match');
        moves.textContent = 0;
        star1.style.color = 'orange';
        star2.style.color = 'orange';
        star3.style.color = 'orange';
        matchCards = [];
    };
};

function showCard(event) {
    if (openCards.length < 2) {
        if (event.target.classList.contains('card')) {
            if (!event.target.classList.contains('open', 'show')) {
                event.target.classList.add('show', 'open');
                moves.textContent = parseInt(moves.textContent) + 1;
        
            if (moves.textContent == 25) {
                star1.style.color = 'orange';
                star2.style.color = 'orange';
                star3.style.color = 'black';
                
            }   else if (moves.textContent == 40) {
                star1.style.color = 'orange';
                star2.style.color = 'black';
                star3.style.color = 'black';
                };

    
        openCards.push(event.target);
  
                if (openCards.length === 2) {
                    
                    if (openCards[0].id === openCards[1].id) {
                        openCards[0].classList.add('match');
                        openCards[1].classList.add('match');
                        matchCards.push(openCards[0]);
                        matchCards.push(openCards[1]);
                        openCards = [];
                        if (matchCards.length === 16) {
                            swal('YOU WIN!');
                        };
                        
                }   else if (openCards[0].id !== openCards[1].id) {
                        setTimeout (function () {
                            openCards[0].classList.remove('open', 'show');
                            openCards[1].classList.remove('open', 'show');
                            openCards = [];
                            
                            for (let i = 0; i < openCards; i++) {
                                openCards = [openCards[i].classList.contains('match')]
                            };
                            
                        },  1000);
                    };
                };
            };
        };
    };
};



