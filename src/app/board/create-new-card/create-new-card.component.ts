import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { CardData } from '../board.component';

@Component({
  selector: 'agb-create-new-card',
  templateUrl: './create-new-card.component.html',
  styleUrls: ['./create-new-card.component.scss']
})
export class CreateNewCardComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CardData,
    public dialogRef: MatDialogRef<CreateNewCardComponent>
    ) { }

  ngOnInit(): void {
    if (!this.data) {
      this.data = {} as CardData;
    }
  }

  dialogClose(): void {
    this.dialogRef.close();
  }
  saveCard(){
    console.log('saveCard: ');
    this.dialogRef.close(this.data);
  }

}
