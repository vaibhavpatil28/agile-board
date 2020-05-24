import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateNewCardComponent } from './create-new-card/create-new-card.component';

export enum AgileBoardSection {
  WhatWentWell = 'WhatWentWell',
  WhatCanBeImproved = 'WhatCanBeImproved',
  StartDoing = 'StartDoing',
  ActionItem = 'ActionItem'
}
export interface CardData {
  content: string;
  sectionName: AgileBoardSection.ActionItem | AgileBoardSection.StartDoing | AgileBoardSection.WhatCanBeImproved | AgileBoardSection.WhatWentWell,
  isHide?: boolean,
  isEdit?: boolean
}

@Component({
  selector: 'agb-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  whatWentWellCards = [{
    content: 'card 1',
    sectionName: AgileBoardSection.WhatWentWell
  }, {
    content: 'card 2',
    sectionName: AgileBoardSection.WhatWentWell
  }, {
    content: 'card 3',
    sectionName: AgileBoardSection.WhatWentWell
  }, {
    content: 'card 4',
    sectionName: AgileBoardSection.WhatWentWell
  }] as CardData[];
  whatCanBeImprovedCards = [] as CardData[];
  startDoingCards = [] as CardData[];
  actionItemCards = [] as CardData[];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  createNewCard(sectionName: string) {
    switch (sectionName) {
      case AgileBoardSection.WhatWentWell:
        this.openDialog(AgileBoardSection.WhatWentWell, this.whatWentWellCards);
        break;
      case AgileBoardSection.WhatCanBeImproved:
        this.openDialog(AgileBoardSection.WhatCanBeImproved, this.whatCanBeImprovedCards);
        break;
      case AgileBoardSection.StartDoing:
        this.openDialog(AgileBoardSection.StartDoing, this.startDoingCards);
        break;
      case AgileBoardSection.ActionItem:
        this.openDialog(AgileBoardSection.ActionItem, this.actionItemCards);
        break;
      default:
        break;
    }
  }
  openDialog(sectionName: AgileBoardSection, sectionList: CardData[], index?: number) {
    const dialogRef = this.dialog.open(CreateNewCardComponent, {
      data: (index >= 0) ? { ...sectionList[index], isEdit: true } : undefined,
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((result: CardData) => {
      console.log('The dialog was closed');
      if (!result) {
        return;
      }
      if (index >= 0) {
        sectionList.splice(index, 1, result);
        return;
      }
      result.sectionName = sectionName;
      sectionList.unshift(result);
    });
  }

}
