import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardData } from '../board/board.component';

@Component({
  selector: 'agb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardData: CardData;
  @Output() editChanges= new EventEmitter<boolean>();
  @Output() visibilityChanges= new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  edit(){
    this.editChanges.emit(true);
  }
  visibility(show:boolean){
    this.visibilityChanges.emit(show);
  }

}
