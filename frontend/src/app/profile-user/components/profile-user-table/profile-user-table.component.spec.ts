import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserTableComponent } from './profile-user-table.component';

describe('ProfileUserTableComponent', () => {
  let component: ProfileUserTableComponent;
  let fixture: ComponentFixture<ProfileUserTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileUserTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileUserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
