
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
}];

var cardsInPlay=[];
var checkForMatch = function (){
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
alert("Sorry, try again.");
}
}
var flipCard = function(cardId){
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
}
flipCard(0);
flipCard(2);