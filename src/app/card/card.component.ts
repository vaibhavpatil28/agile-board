import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'agb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardContent: string;
  constructor() { }

  ngOnInit(): void {
  }

}
