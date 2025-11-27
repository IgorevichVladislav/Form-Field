import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FfSuffixComponent } from './ff-suffix.component';

describe('FfSuffixComponent', () => {
  let component: FfSuffixComponent;
  let fixture: ComponentFixture<FfSuffixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FfSuffixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FfSuffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
