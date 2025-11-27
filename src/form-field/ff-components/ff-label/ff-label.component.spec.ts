import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FfLabelComponent } from './ff-label.component';

describe('FfLabelComponent', () => {
  let component: FfLabelComponent;
  let fixture: ComponentFixture<FfLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FfLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FfLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
