import {Card} from './card.js'

//This class creates a traditional playing card.
export class Bicycle extends Card {

    constructor(value, suit) {
        super(value);
        //Card has a suit
        this._suit = suit;    
    }

    get Suit() {
        return this._suit;
    }

}
Bicycle.SUIT = Object.freeze({"SPADES" : 1, "DIAMONDS" : 2, "CLUBS" : 3, "HEARTS" : 4})
Bicycle.FACE = Object.freeze({"1": 1,"2": 2,"3": 3,"4": 4,"5": 5,"6": 6,"7": 7,"8": 8,"9": 9,"10": 10,"JACK":11,"QUEEN":12,"KING":13,"ACE":14})
Bicycle.JOKER = 0;