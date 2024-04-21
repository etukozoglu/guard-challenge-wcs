import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisplayUserComponent } from './admin-display-user.component';

describe('AdminDisplayUserComponent', () => {
  let component: AdminDisplayUserComponent;
  let fixture: ComponentFixture<AdminDisplayUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDisplayUserComponent]
    });
    fixture = TestBed.createComponent(AdminDisplayUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
