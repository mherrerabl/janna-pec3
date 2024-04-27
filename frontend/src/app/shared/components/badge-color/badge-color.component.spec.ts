import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeColorComponent } from './badge-color.component';

describe('BadgeColorComponent', () => {
  let component: BadgeColorComponent;
  let fixture: ComponentFixture<BadgeColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BadgeColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadgeColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
