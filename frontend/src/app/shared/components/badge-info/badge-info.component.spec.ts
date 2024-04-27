import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeInfoComponent } from './badge-info.component';

describe('BadgeInfoComponent', () => {
  let component: BadgeInfoComponent;
  let fixture: ComponentFixture<BadgeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BadgeInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadgeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
