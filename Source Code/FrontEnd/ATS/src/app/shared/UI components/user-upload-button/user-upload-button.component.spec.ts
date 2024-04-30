import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUploadButtonComponent } from './user-upload-button.component';

describe('UserUploadButtonComponent', () => {
  let component: UserUploadButtonComponent;
  let fixture: ComponentFixture<UserUploadButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserUploadButtonComponent]
    });
    fixture = TestBed.createComponent(UserUploadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
