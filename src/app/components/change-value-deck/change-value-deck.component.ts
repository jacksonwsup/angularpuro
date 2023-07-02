import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/app/models/deck';

@Component({
  selector: 'app-change-value-deck',
  templateUrl: './change-value-deck.component.html',
  styleUrls: ['./change-value-deck.component.scss']
})
export class ChangeValueDeckComponent implements OnInit {

  public nipeDeckValue: string = ""

  public valueDeck: string = ""

  public deckValue: Deck = new Deck(
    "♣",
    "2",
  );

  public nipeDeck: Array<string> =  ["♣", "♠", "♥", "♦"]
  public valueContentDeck: Array<string> = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "J", "k"]

  constructor(
    ) {
  }
  
  public ngOnInit(): void {
    console.log("this.nipeDeckValue", this.nipeDeckValue)
  }

  handleNipeDeck(event: any){
    this.nipeDeckValue =  event.target.innerText
    this.deckValue.nipe =  this.nipeDeckValue
  }

  handleValueDeck(event: any){
    this.valueDeck = event.target.innerText;
    this.deckValue.value =  this.valueDeck;
  }
}