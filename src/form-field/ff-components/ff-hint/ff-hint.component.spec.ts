import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FfHintComponent } from './ff-hint.component';

describe('FfHintComponent', () => {
  let component: FfHintComponent;
  let fixture: ComponentFixture<FfHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FfHintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FfHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
