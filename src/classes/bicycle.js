import {Card} from './card.js'

//This class creates a traditional playing card.
export class Bicycle extends Card {

    constructor(value, suit, color) {
        super(value);
        //Card has a suit
        this._suit = suit;    
        //Card has a color
        this._color = color;
    }

    get Suit() {
        return this._suit;
    }

    get Color() {
        return this._color;
    }

}