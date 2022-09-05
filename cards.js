function createDeck()   {
    var suits = ["♠", "♡", "♦", "♤", "♣"];
    var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    var deck = [];
    
    for (var suitCounter = 0; suitCounter < 4; suitCounter++) {
     for (var rankCounter = 0; rankCounter <13; rankCounter++) {
   //console.log(ranks[rankCounter] + suits[suitCounter]) 
   deck.push(ranks[rankCounter] +suits[suitCounter]);
     }
    }
  return deck;
}
  
function shuffleDeck(deck) {
for(var i = 0; i < 52; i++) {
  var tempCard = deck[i]; 
  var randomIndex = Math.floor(Math.random() * 52);
deck[i] = deck[randomIndex];
deck[randomIndex] = tempCard;
  }
}

   var newDeck = createDeck();
   shuffleDeck(newDeck);
   console.log(newDeck);