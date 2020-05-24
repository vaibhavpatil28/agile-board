import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CamelCaseToRegularStringPipe } from './camel-case-to-regular-string.pipe';



@NgModule({
  declarations: [CardComponent, CamelCaseToRegularStringPipe],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  exports:[CardComponent]
})
export class CardModule { }
