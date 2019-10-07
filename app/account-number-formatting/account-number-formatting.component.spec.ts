import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNumberFormattingComponent } from './account-number-formatting.component';

describe('AccountNumberFormattingComponent', () => {
  let component: AccountNumberFormattingComponent;
  let fixture: ComponentFixture<AccountNumberFormattingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountNumberFormattingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNumberFormattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
