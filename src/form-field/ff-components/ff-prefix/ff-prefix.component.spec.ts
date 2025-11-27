import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FfPrefixComponent } from './ff-prefix.component';

describe('FfPrefixComponent', () => {
  let component: FfPrefixComponent;
  let fixture: ComponentFixture<FfPrefixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FfPrefixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FfPrefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
