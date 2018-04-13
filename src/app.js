import {Deck} from "./classes/deck.js";
import {Bicycle} from './classes/bicycle.js';

//Create a standard card deck.

var deck = new Deck(56);

    for ( var suit in Bicycle.SUIT){
        for( var face in Bicycle.FACE){
            var card = new Bicycle(face,suit);
            deck.Add(card);
        }
    }


deck.Shuffle(3);
var spadesc = 0;
var hearc = 0;
var diac = 0;
var clubsc = 0;

var spades = [];
var hearts = [];
var diamonds = [];
var clubs = [];

while(deck.Deck.length > 0){
    var card = deck.Deal();
    console.log(card);
}
      

