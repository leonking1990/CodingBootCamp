class Card {
    constructor (newValue, newSuit){
        this.value = newValue;
        this.suits = newSuit;
        this.faceValue
        this.setFaceValue();
    }
    setFaceValue(){                                      // this determines if and set the face values
            
        if (this.value == 14) this.faceValue = 'Ace';

        else if (this.value == 13) this.faceValue = 'King';

        else if (this.value == 12) this.faceValue = 'Queen';

        else if (this.value == 11) this.faceValue = 'Jack';

        else this.faceValue = this.value;
            
        
    }

    displayCard(){
        console.log(this.faceValue, ' of ', this.suits);
    }
}
class Deck{
    constructor(){
      this.deck = [];
      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
      
      for (let i = 0 ; i < suits.length ; i++) {
        for (let j = 0 ; j < values.length ; j++) {
            this.deck.push(new Card(values[j], suits[i]));
        }
      }
      
      this.shuffle();
      this.set1 = [];
      this.set2 = [];
      this.deal();
      //this.displayCards();
      
    }
  
    shuffle(){
        const { deck } = this;
        let m = deck.length, i;
    
        while(m){
          i = Math.floor(Math.random() * m--);
    
          [deck[m], deck[i]] = [deck[i], deck[m]];
        }
    
        return this;
    }
  
    displayCards(){
        for (let i = 0 ; i < this.deck.length ; i++){
             console.log(this.deck[i].displayCard())
        }
        
    }
    
    deal(){
        while(this.deck.length > 0){
    
                this.set1.push(this.deck.pop());
            
                this.set2.push(this.deck.pop());
            }
            //this.displayCards();
    }
        
}
  
  
class Player {
    constructor(Name, newHand){
        this.name = Name;
        this.hand = newHand;
        this.points = 0;
    }
    addPoint(){
        this.points++;
        return console.log(this.name, 'has', this.points, 'points! \n \n');
    }
    evaluateCard(card){
        card.faceValue
    }
    playCard(){
        let card = this.hand.pop();
        console.log(this.name, 'played', card.faceValue, 'of', card.suits)
        return card.value; 
        
    }
    
}
const deck = new Deck();
var token = 0;
//console.log(deck1.deck.length)

const player1 = new Player('Player 1', deck.set1);
const player2 = new Player('Player 2', deck.set2);

function play(){
    
    while(player1.hand.length + player2.hand.length > 0){
        var i = player1.playCard();
        var j = player2.playCard()
        if(i > j){
            player1.addPoint();
            
        }
        else if(i < j){
            player2.addPoint();
            
        }
        else {
            console.log('Tie!')
        }
        
    }
    console.log(player1.name, 'has', player1.points, 'points and', player2.name, 'has', player2.points, 'points')
    if(player1.points>player2.points){
        return console.log(player1.name, 'Wins!')
    }
    else if(player1.points<player2.points){
        return console.log(player2.name, 'Wins!')
    }
    else {
        return console.log('Game is a tie!')
    }
}
play();
  
