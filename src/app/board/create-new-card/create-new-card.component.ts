import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CardData } from '../board.component';

export interface DialogData {
  cardData: CardData;
  isEdit: boolean
}
@Component({
  selector: 'agb-create-new-card',
  templateUrl: './create-new-card.component.html',
  styleUrls: ['./create-new-card.component.scss']
})
export class CreateNewCardComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<CreateNewCardComponent>
  ) { }

  ngOnInit(): void {
    if (!this.data) {
      this.data = { cardData: {} } as DialogData;
    }
  }

  dialogClose(): void {
    this.dialogRef.close();
  }
  saveCard() {
    console.log('saveCard: ', this.data.cardData);
    let { content } = { ...this.data.cardData }
    if (content && content.trim()) {
      this.data.cardData.content = content.trim();
      this.dialogRef.close(this.data.cardData);
    }
  }

}
