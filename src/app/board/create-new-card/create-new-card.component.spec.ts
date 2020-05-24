import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewCardComponent } from './create-new-card.component';

describe('CreateNewCardComponent', () => {
  let component: CreateNewCardComponent;
  let fixture: ComponentFixture<CreateNewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
