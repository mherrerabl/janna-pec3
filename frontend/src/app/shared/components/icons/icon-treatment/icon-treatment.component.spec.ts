import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTreatmentComponent } from './icon-treatment.component';

describe('IconTreatmentComponent', () => {
  let component: IconTreatmentComponent;
  let fixture: ComponentFixture<IconTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconTreatmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
