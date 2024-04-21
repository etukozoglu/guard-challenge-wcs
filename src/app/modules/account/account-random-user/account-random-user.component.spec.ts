import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRandomUserComponent } from './account-random-user.component';

describe('AccountRandomUserComponent', () => {
  let component: AccountRandomUserComponent;
  let fixture: ComponentFixture<AccountRandomUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountRandomUserComponent]
    });
    fixture = TestBed.createComponent(AccountRandomUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
