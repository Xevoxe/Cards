
export class Deck {

    constructor(size) {
        //How many cards are in this deck
        this._size = size;
        this._deck = [];
    }

    get Size(){
        return this._size;
    }

    get Deck(){
        return this._deck;
    }

    //Method to add a card to the deck
    Add(card) {
        //Do not add a card if the deck has reached its set size.
        if(this._deck.length < this._size){
            this._deck.push(card);
        }
    }
    //Method to remove a card from the deck
    //Method to shuffle the deck
    Shuffle(value) {
        if(this._deck.Length === 0){
            console.log("This deck is empty!");
            return;
        }
        var position = this._deck.length -1;
        //How many times to shuffle the deck.
        var shuffle = value;     
        //Iterate through the rounds until all card position have been visited once.
        do{
            while (position >= 0){
                //Pick a random position    
                var new_position = Math.floor((Math.random()*position));
                //Check to see if the current position is the same as the new position
                if(position === new_position){
                }else{
                    //Swap the positions
                    var current = this._deck[position];
                    this._deck[position] = this._deck[new_position];
                    this._deck[new_position] = current;    
                }
                position--;
                shuffle--;
            }
        }while(shuffle > 0)
        return;
    }

    //Deal a card
    Deal() {
        //deal the top card
        var card = this._deck[this._deck.length-1];
        //Remove the card from the deck.
        this._deck.pop();
        return card;
    }

}