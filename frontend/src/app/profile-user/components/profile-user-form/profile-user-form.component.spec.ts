import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserFormComponent } from './profile-user-form.component';

describe('ProfileUserFormComponent', () => {
  let component: ProfileUserFormComponent;
  let fixture: ComponentFixture<ProfileUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileUserFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
