import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeScreenComponent } from './user-home-screen.component';

describe('UserHomeScreenComponent', () => {
  let component: UserHomeScreenComponent;
  let fixture: ComponentFixture<UserHomeScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserHomeScreenComponent]
    });
    fixture = TestBed.createComponent(UserHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
