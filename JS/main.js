
var cards=[
{
	suit: "hearts",
	rank: "queen",
	cardImage: "images/queen-of-hearts.png"
},
{
	suit: "diamonds",
	rank: "queen",
	cardImage: "images/queen-of-diamonds.png"
},
{
	suit: "hearts",
	rank: "king",
	cardImage: "images/king-of-hearts.png"
},
{
	suit: "diamonds",
	rank: "king",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function (){
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

var flipCard = function() {
	var cardId = this.getAttribute('data-id');	
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	this.setAttribute('src', cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);

	if (cardsInPlay.length === 2) {
		checkForMatch();
		console.log("Executed checkforMatch.");
	} else {
		console.log("Skipped checkForMatch.");
		console.log(cardsInPlay.length);
	}	

	}	

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i)
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
createBoard();