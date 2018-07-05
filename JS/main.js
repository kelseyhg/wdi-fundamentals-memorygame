
var cards=["queen","queen","king","king"];
var cardsInPlay=[];
cardsInPlay.push(cardOne);
var cardOne = cards[0];
console.log("user flipped " + cardOne);
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("user flipped " + cardTwo);
if (cardsInPlay.length === 2){
if (cardOne === cardTwo);
alert("You found a match!");
}else {
 alert("Sorry, try again!")}