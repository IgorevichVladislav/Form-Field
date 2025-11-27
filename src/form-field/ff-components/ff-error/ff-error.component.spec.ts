import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FfErrorComponent } from './ff-error.component';

describe('FfErrorComponent', () => {
  let component: FfErrorComponent;
  let fixture: ComponentFixture<FfErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FfErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FfErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
