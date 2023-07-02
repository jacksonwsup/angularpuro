import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeValueDeckComponent } from './change-value-deck.component';

describe('ChangeValueDeckComponent', () => {
  let component: ChangeValueDeckComponent;
  let fixture: ComponentFixture<ChangeValueDeckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeValueDeckComponent]
    });
    fixture = TestBed.createComponent(ChangeValueDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});