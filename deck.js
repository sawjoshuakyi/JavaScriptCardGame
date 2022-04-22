class shan9{
    constructor(shuffledDeck, numPlayers){
        this.deck = shuffledDeck;
        this.numPlayers = numPlayers;
        this.hands = []
        //this.play(this.hands);
        this.rank = ["Hearts", "Diamonds", "Clubs", "Spades"];
        this.deal(this.deck);
    }

    //distribute 2 cards each from the deck
    deal(deck, numPlayers){
        let hands = [];
        var temp = [];
        var count = 0;
        for(var i = 0; i < numPlayers; i ++){
            for(var j = 0; j < 2; j ++ ){
                temp.push(deck[count]);
                count++;
            }
            hands[i] = temp;
            temp = [];
        }
        return hands;
    }

    play(hands){
        var highest = 0;
        var scores = [];
        var temp = 0;
        for(var i = 0; i < hands.length; i ++){
            for(var j = 0; j < hands[i].length; j ++){
                if ((hands[i][j].Value == 'J') || (hands[i][j].Value == 'Q') || (hands[i][j].Value == 'K')){
                    temp += 10;
                }else if(hands[i][j].Value =='A'){
                    temp += 1;
                }else{
                    var foo = parseInt(hands[i][j].Value)
                    temp += foo;
                }
            }
            scores[i] = temp;
            temp = 0
        }
        const max = Math.max.apply(null, scores);
        const index = scores.indexOf(max)
        console.log("Current Scores are: ", scores);
        console.log("And the winner is player: ", index);
    }
}

class Deck{
    constructor(){
        this.deck = []
        this.getDeck(); // will initiate a new deck
        this.shuffle(this.deck)
        
    }

    getDeck(){
        var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        let deck = new Array();
        for(var i = 0; i < suits.length; i ++){
            for(var j = 0; j < values.length; j++){
                var card = {Value: values[j], Suits: suits[i]};
                deck.push(card);
            }
        }
        return deck;
    }

    shuffle(deck){
        let numCards = deck.length;
        for(var i =0; i <numCards; i++){
            let j = Math.floor(Math.random() * numCards);
            let temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }
        return deck;
    }
}


main = () => {
    console.log("Lets play a game of cards.");
    console.log("This game is called Shan9; where players will each be dealth 2 cards and the player with highest number wins.")
    console.log("Let's enjoy the game!")
    const deck = new Deck();
    console.log("A new deck has been initialized")
    console.log("Lets play for 5 players. Players are numbered from 0 to 4.")
    var temp = deck.getDeck();
    var shuffle = deck.shuffle(temp);
    const game = new shan9(shuffle, 5);
    var cards = game.deal(shuffle, 5);
    game.play(cards);
}

main();
