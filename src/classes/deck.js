
export class Deck {

    constructor(size) {
        //How many cards are in this deck
        this._size = size;
        this._deck = [];
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
    Shuffle() {
        if(this._deck.Length === 0){
            console.log("This deck is empty!");
            return;
        }
        var position = this._deck.length -1;     
        //Iterate through the rounds until all card position have been visited once.
        while (position > 0){
            //Pick a random position
            var new_position = Math.floor((Math.random()*position));
            //Check to see if the current position is the same as the new position
            if(position === new_position){
                continue;
            }else{
                //Swap the positions
                var temp = this._deck[new_position];
                this._deck[new_position] = this._deck[position];
                this._deck[position] = temp;
            }
            position--;
        }
        return;
    }

}