import { Component, Input, OnInit } from '@angular/core';
import { Deck } from '../../models/deck';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit{

  @Input()
  public deck?: Deck;

  constructor(){}

  public ngOnInit(): void {
    
  }

  isRed(){
    return ["♥", "♦"].includes(this.deck?.nipe || "")
  }
}